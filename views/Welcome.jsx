import React from 'react'

const Welcome = React.createClass({
  render() {
    const { role } = this.props

    return (
      <html style={{
        background: 'url(./image.jpg)', backgroundSize: 'cover', height: '100%', color: 'white', fontSize: '20px'
      }} >
        <center className="column is-offset-6 is-6">
          Електронний кабінет безпечного підключення до державних ресурсів
          <div >
            {(role === 'first' || role === 'second') && <a style={{ textDecoration: 'none', color: 'white', fontSize: '24px' }} href="https://diia.gov.ua/">Дія<br /></a>}
            {(role === 'first' || role === 'third') && <a a style={{ textDecoration: 'none', color: 'white', fontSize: '24px' }} href="https://nais.gov.ua/">Національні інформаційні системи<br /></a>}
            {(role === 'first' || role === 'third') && <a a style={{ textDecoration: 'none', color: 'white', fontSize: '24px' }} href="https://reyestr.court.gov.ua/">Єдиний державний реєстр судових рішень<br /></a>}
            Клікніть <a style={{ textDecoration: 'none', color: 'white' }} href="/">тут</a> для вилогіну.
          </div>
        </center >
      </html >
    )
  },
})

export default Welcome
