import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import $ from 'jquery';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name:    $('#name').val(),
        message: $('#message').val()
      }
    };
  }
  render() {
    return(
      <div>
        <Header user={this.state.user} />
      </div>
    )
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('container')
);