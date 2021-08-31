import { render } from '@testing-library/react'
import React from 'react'

class Inseguro extends React.Component {
  render() {
    return(
    <div>
      <h1>Vinicius Silva</h1>
      <p>To achando um pouco complicado, com o tempo acho que da pra aprender</p>
    </div>
    )
  }
}

class Seguro extends React.Component {
  render() {
    return (
    <div>
      <h1>Vinicius Silva</h1>
      <p>É acho que ja aprendi, pelo menos o básico</p>
    </div>
    )
  }
}


export {
  Seguro,
  Inseguro,
}