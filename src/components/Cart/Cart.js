import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns.js'


export default class Cart extends Component {
  render() {
    return (
      <section>
        <Title name='your' title="cart"></Title>
        <CartColumns></CartColumns>
      </section>
    )
  }
}
