import React, { Component } from 'react';

import Image from './image';
import Price from './price';
import TextBox from './text-box';

class ProductCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const product = this.props.product;

    return (
      <div>
        <Image src={product.imageUrl}
               alt={product.name}
               width="200"
               height="200" />
        <TextBox text={product.name} />
        <Price price={product.price} />
        <br />
      </div>
    )
  }
}

export default ProductCard;
