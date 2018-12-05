import React from 'react';
import ReactDOM from 'react-dom';

import CatalogPage from '~/src/components/views/catalog/index';

class App extends React.Component {
  render() {
    return (
      <CatalogPage />
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
