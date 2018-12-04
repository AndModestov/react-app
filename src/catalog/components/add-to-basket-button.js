import React, { Component } from 'react';

import BasketContext from '../basket-context';

class AddToBasketButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { product } = this.props;

    return (
      <BasketContext.Consumer>
        {
          ({ addToBasket }) => (
            <button onClick={() => addToBasket(product)}>
              Add to Basket
            </button>
          )
        }
      </BasketContext.Consumer>
    )
  }
}

export default AddToBasketButton;
