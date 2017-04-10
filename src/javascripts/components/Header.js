import React from 'react';
import nl2br from 'react-nl2br';

export default class Header extends React.Component {
  getText() {
    if(this.props.user) {
      return 'Welcome!\n' + this.props.user.name + 'さん';
    }
    return 'ベーコネクト｜Chat in Room!';
  }
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
            <td><span style={style.text}>{nl2br(this.getText())}</span></td>
            <td style={{textAlign: 'right'}}>
              {(() => {
                return this.props.user ? <div>login</div> : null;
              })()}
            </td>
          </tr>
        </table>
      </div>
    );
  }
}