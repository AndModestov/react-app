import React, { Component } from 'react';

import Catalog from './catalog';
import { PRODUCTS } from '../constants/products';

class CatalogPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Catalog products={PRODUCTS} />
      </div>
    )
  }
}

export default CatalogPage;
