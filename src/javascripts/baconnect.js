import React from 'react';
import ReactDOM from 'react-dom';

class Page extends React.Component {
  render() {
    return (
      <div>test</div>
    );
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('container')
);