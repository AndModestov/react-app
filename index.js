import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import routes from "~/src/routes";
import Menu from "~/src/components/menu";
import BasketContainer from "~/src/components/basket-container"

class App extends React.Component {
  render() {
    return (
      <BasketContainer>
        <Router>
          <div className="container">
            <Menu />
            <Switch>
              {
                routes.map((route, index) => (
                  <Route {...route} key={index} />
                ))
              }
            </Switch>
          </div>
        </Router>
      </BasketContainer>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
