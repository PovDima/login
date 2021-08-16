import React from 'react'

const Welcome = React.createClass({
  render() {
    const { role } = this.props

    return (
      <html style={{
        background: 'url(./image.jpg)', backgroundSize: 'contain', height: '100%', color: 'white',
      }} >
        <center className="column is-offset-6 is-6">
          <div >
            <a style={{ textDecoration: 'none', color: 'white' }} href="">Nais</a>
            <br />
            <a style={{ textDecoration: 'none', color: 'white' }} href="">Registr</a>
            <br />
            Click <a style={{ textDecoration: 'none', color: 'white' }} href="/">here</a> to logout.
          </div>
        </center>
      </html>
    )
  },
})

export default Welcome
