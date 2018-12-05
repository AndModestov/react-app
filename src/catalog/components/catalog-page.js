import React, { Component } from 'react';

import Catalog from './catalog';
import { PRODUCTS } from '../constants/products';
import BasketButton from './basket-button';
import BasketContext from '../basket-context';

class CatalogPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productsInBasket: []
    };

    this.addToBasket = this.addToBasket.bind(this);
  }

  addToBasket(product, amount = 1) {
    const productsInBasket = this.state.productsInBasket;
    productsInBasket.push({ ...product, amount });
    this.setState({ productsInBasket });
  }

  render() {
    return (
      <BasketContext.Provider
        value={{
          productsInBasket: this.state.productsInBasket,
          addToBasket: this.addToBasket
        }}>
        <BasketButton />
        <Catalog products={PRODUCTS} />
      </BasketContext.Provider>
    )
  }
}

export default CatalogPage;
