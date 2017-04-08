import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.js';

class Page extends React.Component {
  render() {
    return (
      <Header />
    );
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('container')
);