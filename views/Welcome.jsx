import React from 'react'

const Welcome = React.createClass({
  render() {
    const { role } = this.props
    console.log(role)
    return (
      <center className="column is-offset-6 is-6">
        <div >
          <a href="">Nais</a>
          <br />
          <a href="">Registr</a>
          <br />
          Click <a href="/">here</a> to logout.
        </div>
      </center>
    )
  },
})

export default Welcome
