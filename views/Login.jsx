import React from 'react'

const Login = React.createClass({
  getInitialState() {
    return { error: false }
  },

  render() {

    return (
      <html style={{
        background: 'url(./image.jpg)', backgroundSize: 'cover', height: '100%', color: 'white'
      }} >
        <section className="column is-offset-6 is-4">
          <center>
            <h1>Електронний кабінет безпечного підключення до державних ресурсів</h1>
            <p>Введіть логін та пароль</p>
            <form action="/login" method="post" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ display: 'flex', maxWidth: '215px', justifyContent: 'space-between', width: '100%' }}>
                <div>Логін</div>
                <div><input type="text" name="username" /></div>
              </div>
              <div style={{ display: 'flex', maxWidth: '215px', justifyContent: 'space-between', width: '100%' }}>
                <div>Пароль</div>
                <div><input type="password" name="pwd" /></div>
              </div>
              <br />
              <div style={{ display: 'flex', maxWidth: '215px', justifyContent: 'center', width: '100%' }}>
                <input type="submit" value="Логін" name="regOrLogin" class="class1" />
              </div>
              <br />
            </form>
            <a href='/register' ><button>Реєстрація</button></a>
          </center>
        </section>
      </html >
    )
  },
})

export default Login
