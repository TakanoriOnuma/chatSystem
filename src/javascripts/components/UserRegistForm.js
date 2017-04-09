import React from 'react';
import $ from 'jquery';

export default class UserRegistForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const data = {
      name:    this.refs.name.value.trim(),
      message: this.refs.message.value.trim()
    };

    $.ajax({
      url: 'v1/users',
      dataType: 'json',
      type: 'POST',
      data: data,
      cache: false,
      success: () => { window.alert('ok'); },
      error: (xhr, status, err) => {
        try {
          const res = $.parseJSON(xhr.responseText);
          console.log(res.message);          
        }
        catch(e) {
          console.log(e);
        }
      }
    });
  }
  render() {
    const style = {
      form: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        marginTop: '10px',
        width: '280px',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '20px 15px'
      },
      text: {
        width: '100%'
      },
      textarea: {
        width: '100%',
        resize: 'none'
      },
      button: {
        width: '100%',
        fontSize: '1.5em',
        color: '#FFFFFF',
        backgroundColor: '#87CEEB',
        border: 'solid 1px #77BEDB'
      },
      supplement: {
        color: '#999999',
        fontSize: '0.8em'
      }
    };
    return(
      <div style={style.form}>
        <form action="" onSubmit={this.handleSubmit.bind(this)}>
          <label htmlFor="name">ニックネーム</label><br />
          <input id="name" ref="name" type="text" name="name" style={style.text} /><br />
          <br />
          <label htmlFor="message">一言メッセージ（任意）</label><br />
          <textarea name="message" ref="message" id="message" cols="30" rows="10" style={style.textarea}></textarea><br />
          <br />
          <button type="submit" style={style.button}>入場</button>
          <br />
          <br />
          <div style={style.supplement}>※ニックネームが全角10文字以内、一言メッセージが30文字以内で入力してください。</div>
        </form>
      </div>
    )
  }
}