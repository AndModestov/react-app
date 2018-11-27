class Bill {
  constructor() {
    this._items = [];
  }

  add(name, price, count = 1) {
    this._items.push({
      name: name,
      price: price,
      count: count
    });
  }

  remove(name) {
    let elementIndex = this._items.findIndex((item) => item.name === name);
    if (elementIndex) {
      this._items.splice(elementIndex, 1);
    }
  }

  items() {
    return this._items;
  }

  totalPrice() {
    let totalPrice = 0;
    this._items.forEach((item) => {
       totalPrice += item.price * item.count;
    });
    return totalPrice;
  }
}

export default Bill;
