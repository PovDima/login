import React from 'react'

const Register = React.createClass({
  render() {
    return (
      <html style={{
        background: 'url(./image.jpg)', backgroundSize: 'cover', height: '100%', color: 'white'
      }} >
        <section className="column is-offset-6 is-4">
          <center>
            <h1>Реєстрація</h1>
            <p>Введіть логін та пароль</p>
            <table>
              <form action="/register" method="post">
                <tr>
                  <td>Логін</td>
                  <td><input type="text" name="username" /></td>
                </tr>
                <tr>
                  <td>Роль</td>
                  <td><select name="role">
                    <option value="first">Перша</option>
                    <option value="second" >Друга</option>
                    <option value="third">Третя </option>
                  </select>
                  </td>
                </tr>
                <tr>
                  <td>Пароль</td>
                  <td><input type="password" name="pwd" /></td>
                </tr>
                <tr>
                  <td align="center" colspan="2"><input type="submit" value="Реєстрація" name="regOrLogin" class="class1" /></td>
                  <td></td>
                </tr>
              </form>
            </table>
            <td align="center" colspan="2"><a href='/' ><button>Логін</button></a></td>
          </center>
        </section>
      </html>
    )
  },
});

export default Register
