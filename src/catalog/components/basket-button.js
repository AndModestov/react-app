import React, { Component } from 'react';

import BasketContext from '../basket-context';

class BasketButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BasketContext.Consumer>
      {
        ({ productsInBasket, addToBasket }) => {
          return (
            <div>
              <h2>
                <span>In Basket:</span>
                <span> {productsInBasket.length} goods.</span>
              </h2>
              <h4>
                <div>Products:</div>
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
