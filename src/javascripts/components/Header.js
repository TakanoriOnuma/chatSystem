import React from 'react';

export default class Header extends React.Component {
  render() {
    const style = {
      header: {
        backgroundColor: 'lightcyan',
        height: '50px'
      },
      logo: {
        height: '50px',
        verticalAlign: 'middle'
      },
      text: {
        color: 'blue',
        fontWeight: 'bolder'
      }
    };

    return (
      <div style={style.header}>
        <img style={style.logo} src="/public/images/logo.png" alt="" />
        <span style={style.text}>ベーコネクト｜Chat in Room!</span>
      </div>
    );
  }
}