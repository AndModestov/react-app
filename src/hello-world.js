import React from 'react';
import ReactDOM from 'react-dom';
import Bill from '~/src/Bill';

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], total: null }
  }

  componentDidMount() {
    let bill = new Bill();
    bill.add('Pizza', 200);
    bill.add('Pasta', 150, 2);
    bill.add('Salad', 250);
    bill.add('Coffee', 100, 2);

    this.setState({
      items: bill.items(),
      total: bill.totalPrice()
    });
  }

  render() {
    const { items } = this.state;
    const { total } = this.state;

    return (
      <div>
        <h3>Bill:</h3>
        <ul>
          {
            items.map((item) => (
              <li>{item.name} - {item.price}$ ({item.count})</li>
            ))
          }
        </ul>
        <h3>Total: { total }$</h3>
      </div>
    )
  }
}

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('root')
);
