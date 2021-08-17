import React from 'react'

const Error = React.createClass({
  render() {
    return (
      <html style={{
        background: 'url(./image.jpg)', backgroundSize: 'cover', height: '100%', color: 'white'
      }} >
        <center className="column is-offset-6 is-6">
          <p>Сторінка помилки</p>
          <p> {this.props.error}</p>
          {this.props.name === "Register" ?
            <div>Клікніть <a href='/register'>тут </a>для реєстрації. </div>
            :
            <div> Клікніть <a href='/'>тут </a>для логіну. </div>
          }
        </center>
      </html>
    )
  },
})

export default Error
