import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import UserRegistForm from './components/UserRegistForm';

class Page extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <UserRegistForm />
      </div>
    );
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('container')
);