// src/OnlineShopping.js
import React, { Component } from 'react';
import Cart from './Cart';

class OnlineShopping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { itemName: 'Laptop', price: 1200 },
        { itemName: 'Headphones', price: 150 },
        { itemName: 'Smartphone', price: 900 },
        { itemName: 'Keyboard', price: 80 },
        { itemName: 'Mouse', price: 40 },
      ],
    };
  }

  render() {
    return (
      <div>
        <h1>Online Shopping Cart</h1>
        {this.state.items.map((item, index) => (
          <Cart
            key={index}
            itemName={item.itemName}
            price={item.price}
          />
        ))}
      </div>
    );
  }
}

export default OnlineShopping;
