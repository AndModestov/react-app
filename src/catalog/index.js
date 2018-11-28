import React from 'react';
import ReactDOM from 'react-dom';

import CatalogPage from './components/catalog-page';

class CatalogSection extends React.Component {
  render() {
    return (
      <CatalogPage />
    )
  }
}

ReactDOM.render(
  <CatalogSection />,
  document.getElementById('root')
);
