import React from 'react';

export default class Header extends React.Component {
  render() {
    const style = {
      header: {
        backgroundColor: 'lightcyan',
        border: '0',
        borderCollapse: 'collapse',
        borderSpacing: '0',
        height: '50px',
        width: '100%'
      },
      logo: {
        height: '50px'
      },
      text: {
        color: 'blue',
        fontWeight: 'bolder'
      }
    };

    return (
      <div>
        <table style={style.header}>
          <tr>
            <td style={{width: '60px'}}><img style={style.logo} src="/public/images/logo.png" alt="" /></td>
            <td><span style={style.text}>{this.props.text}</span></td>
            <td></td>
          </tr>
        </table>
      </div>
    );
  }
}