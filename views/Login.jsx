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
            <table>
              <form action="/login" method="post">
                <tr>
                  <td>Логін</td>
                  <td><input type="text" name="username" /></td>
                </tr>
                <tr>
                  <td>Пароль</td>
                  <td><input type="password" name="pwd" /></td>
                </tr>
                <tr>
                  <td colspan="2" align="center"><input type="submit" value="Логін" name="regOrLogin" class="class1" /></td>
                </tr>
              </form>
            </table>
            <td align="center" colspan="2"><a href='/register' ><button>Реєстрація</button></a></td>
          </center>
        </section>
      </html >
    )
  },
})

export default Login
