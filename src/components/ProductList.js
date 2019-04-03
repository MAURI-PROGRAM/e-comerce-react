import React, { Component } from 'react'
import Title from './Title'
import {storeProducts} from '../data'
import {ProductConsumer} from '../context'
import Product from './Product';
export default class ProductList extends Component {
  state = {
    products:storeProducts
  }

  render() {
   
    return (
      <div>
        <React.Fragment>
          <div className="py-5">
            <div className="container">
              <Title name="our" title="product"/>
              <div className="row">
                <ProductConsumer>
                  {(value)=>{
                    return value.products.map(products=>{
                      return <Product key={products.id} product={products}></Product>
                    })
                  }}
                </ProductConsumer>              
              </div>
            </div>
          </div>
        </React.Fragment>
      </div>
    )
  }
}
