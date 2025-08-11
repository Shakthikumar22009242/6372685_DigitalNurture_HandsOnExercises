// src/Cart.js
import React, { Component } from 'react';

class Cart extends Component {
  render() {
    const { itemName, price } = this.props;  // receiving props
    return (
      <div>
        <p>Item: {itemName}</p>
        <p>Price: ${price}</p>
        <hr />
      </div>
    );
  }
}

export default Cart;
