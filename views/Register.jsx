import React from 'react'

const Register = React.createClass({
  render() {
    return (
      <html style={{
        background: 'url(./image.jpg)', backgroundSize: 'cover', height: '100%', color: 'white', fontSize: '20px'
      }} >
        <section className="column is-offset-6 is-4">
          <center>
            <h1>Реєстрація</h1>
            <p>Введіть логін та пароль</p>
            <form action="/register" method="post" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ display: 'flex', maxWidth: '300px', justifyContent: 'space-between', width: '100%' }}>
                <div>Логін</div>
                <div><input style={{ font: '400 20px Arial' }} type="text" name="username" /></div>
              </div>
              <div style={{ display: 'flex', maxWidth: '300px', justifyContent: 'space-between', width: '100%' }} >
                <div>Роль</div>
                <div>
                  <select name="role" style={{ display: 'flex', maxWidth: '300px', justifyContent: 'space-between', width: '100%', font: '400 20px Arial' }}>
                    <option style={{ font: '400 20px Arial' }} value="first">Перша</option>
                    <option style={{ font: '400 20px Arial' }} value="second" >Друга</option>
                    <option style={{ font: '400 20px Arial' }} value="third">Третя </option>
                  </select>
                </div>
              </div>
              <div style={{ display: 'flex', maxWidth: '300px', justifyContent: 'space-between', width: '100%' }}>
                <div>Пароль</div>
                <div><input style={{ font: '400 20px Arial' }} type="password" name="pwd" /></div>
              </div>
              <br />
              <div style={{ display: 'flex', maxWidth: '300px', justifyContent: 'center', width: '100%' }}>
                <div align="center" colspan="2"><input style={{ font: '400 20px Arial' }} type="submit" value="Реєстрація" name="regOrLogin" class="class1" /></div>
              </div>
            </form>
            <br />
            <a href='/' ><button style={{ font: '400 20px Arial' }}>Логін</button></a>
          </center>
        </section>
      </html>
    )
  },
});

export default Register
