import React, { Component } from 'react'
import {storeProducts,detailProduct} from './data'

const ProductContext = React.createContext();


class ProductProvider extends Component {
  state = {
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
  handelDetail=()=>{
    console.log('hello from detail')
  }
  addToCart=()=>{
    console.log('hello from add to cart')
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
      <ProductContext.Provider value={{...this.state,handelDetail:this.handelDetail,
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
