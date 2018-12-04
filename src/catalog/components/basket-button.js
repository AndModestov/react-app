import React, { Component } from 'react';

import BasketContext from '../basket-context';

class BasketButton extends Component {
  constructor(props) {
    super(props);

    this.onDragOver = this.onDragOver.bind(this);
  }

  onDragDrop(e, addToBasket) {
    const product = JSON.parse(e.dataTransfer.getData("product"));
    addToBasket(product);
  }

  onDragOver(e) {
    e.preventDefault();
  }

  render() {
    return (
      <BasketContext.Consumer>
      {
        ({ productsInBasket, addToBasket }) => {
          return (
            <div
              onDragOver={this.onDragOver}
              onDrop={(e) => this.onDragDrop(e, addToBasket)}
              style={{
                border: '1px solid red',
                marginBottom: '10px',
                padding: '10px',
                width: '400px',
                position: 'fixed',
                right: '10px',
                top: '10px'
              }}>
              <h2>
                <span>In Basket ({productsInBasket.length})</span>
              </h2>
              <h4>
                <div>Goods:</div>
                <ul>
                  {
                    productsInBasket.map((prod, key) => (
                      <li key={key}>{prod.name} - {prod.price}$ ({prod.amount})</li>
                    ))
                  }
                </ul>
              </h4>
            </div>
          )
        }
      }
      </BasketContext.Consumer>
    )
  }
}

export default BasketButton;
