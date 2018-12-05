import React, { Component } from 'react';

import Image from './image';
import Price from './price';
import TextBox from './text-box';
import AddToBasketButton from './add-to-basket-button';

class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.onDragStart = this.onDragStart.bind(this);
  }

  onDragStart(e) {
    const product = this.props.product;
    e.dataTransfer.setData("product",  JSON.stringify(product));
  }

  render() {
    const product = this.props.product;

    return (
      <div
        onDragStart={this.onDragStart}
        draggable
        style={{
          border: '1px solid black',
          width: '400px',
          padding: '10px',
          marginBottom: '5px',
          textAlign: 'center'
        }}>
        <Image src={product.imageUrl}
               alt={product.name}
               width="200"
               height="200" />
        <TextBox text={product.name} />
        <Price price={product.price} />
        <AddToBasketButton product={product} />
        <br />
      </div>
    )
  }
}

export default ProductCard;
