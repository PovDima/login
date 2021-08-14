import React from 'react'

const Register = React.createClass({
  render() {
    return (
      <section className="column is-offset-6 is-4">
        <center>
          <h1>Register</h1>
          <p>Enter your username and password</p>
          <table>
            <form action="/register" method="post">
              <tr>
                <td>Username</td>
                <td><input type="text" name="username" /></td>
              </tr>
              <tr>
                <td>Role</td>
                <td><select name="role">
                  <option value="first">First</option>
                  <option value="second" >Second</option>
                  <option value="third">Third </option>
                </select>
                </td>
              </tr>
              <tr>
                <td>Password</td>
                <td><input type="password" name="pwd" /></td>
              </tr>
              <tr>
                <td align="center" colspan="2"><input type="submit" value="Register" name="regOrLogin" class="class1" /></td>
                <td></td>
              </tr>
            </form>
          </table>
          <td align="center" colspan="2"><a href='/' ><button>Login</button></a></td>
        </center>
      </section>
    )
  },
});

export default Register
