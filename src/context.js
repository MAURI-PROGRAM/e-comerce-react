import React, { Component } from 'react'
import {storeProducts,detailProduct} from './data'

const ProductContext = React.createContext();


class ProductProvider extends Component {
  state = {
    cart:[],
    products:[],
    detailProduct:detailProduct
  }
  componentDidMount(){
    this.setProducts();
  }
  setProducts=()=>{
    let temProducts=[];
    storeProducts.forEach(item=>{
      const singleItem={...item};
      temProducts=[...temProducts,singleItem];

    });
    this.setState(()=>{
      return {products:temProducts};
    })
  }

  getItem=(id)=>{
    const product = this.state.products.find(item=>item.id===id)
    return product
  }
  handleDetail=(id)=>{
    const product= this.getItem(id);
    this.setState(()=>{
      return {detailProduct:product}
    })
  }
  addToCart=(id)=>{
    let temProducts=[...this.state.products];
    const index=temProducts.indexOf(this.getItem(id));
    const product = temProducts[index];
    product.inCart = true;
    product.count=1;
    const price = product.price;
    product.total= price;
    this.setState(()=>{
      return {product:temProducts,cart:[...this.state.cart,product]}
    },()=>{
      console.log(this.state)
    })

  }
  tester=()=>{
    console.log('state products:',this.state.products[0].inCart)
    console.log('Data products : ',storeProducts[0].inCart)

    const tempProducts = [...this.state.products];
    tempProducts[0].inCart=true
    this.setState(()=>{
      return {products:tempProducts}
    },()=>{
      console.log('state products:',this.state.products[0].inCart)
    console.log('Data products : ',storeProducts[0].inCart)
    })
  }
  render() {
    return (
      <ProductContext.Provider value={{...this.state,handleDetail:this.handleDetail,
      addToCart:this.addToCart}}>
      <button onClick={this.tester}>test me</button> 
      {
          this.props.children
      }
             
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;
export {ProductProvider,ProductConsumer}
