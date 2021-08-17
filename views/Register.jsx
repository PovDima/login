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
            <form action="/register" method="post" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ display: 'flex', maxWidth: '215px', justifyContent: 'space-between', width: '100%' }}>
                <div>Логін</div>
                <div><input type="text" name="username" /></div>
              </div>
              <div style={{ display: 'flex', maxWidth: '215px', justifyContent: 'space-between', width: '100%' }} >
                <div>Роль</div>
                <div>
                  <select name="role" style={{ display: 'flex', maxWidth: '215px', justifyContent: 'space-between', width: '100%' }}>
                    <option value="first">Перша</option>
                    <option value="second" >Друга</option>
                    <option value="third">Третя </option>
                  </select>
                </div>
              </div>
              <div style={{ display: 'flex', maxWidth: '215px', justifyContent: 'space-between', width: '100%' }}>
                <div>Пароль</div>
                <div><input type="password" name="pwd" /></div>
              </div>
              <br />
              <div style={{ display: 'flex', maxWidth: '215px', justifyContent: 'center', width: '100%' }}>
                <div align="center" colspan="2"><input type="submit" value="Реєстрація" name="regOrLogin" class="class1" /></div>
                <div></div>
              </div>
            </form>
            <br />
            <a href='/' ><button>Логін</button></a>
          </center>
        </section>
      </html>
    )
  },
});

export default Register
