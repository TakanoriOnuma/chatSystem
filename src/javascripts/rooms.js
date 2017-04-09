import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import $ from 'jquery';
import nl2br from 'react-nl2br';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Welcome!\n' + $('#name').val() + 'さん'
    };
  }
  render() {
    return(
      <div>
        <Header text={nl2br(this.state.text)} />
      </div>
    )
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('container')
);