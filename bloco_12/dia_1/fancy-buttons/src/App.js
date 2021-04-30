import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    // A função abaixo vincula "manualmente" o `this` à nossa função
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      numeroDeCliques: 0
    }
  }

  handleClick() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))

    console.log('Clicou no botão!')
    console.log(this)
  }

  render() {
    return (
      <div>
        <button className='' onClick={this.handleClick}>Botão: {this.state.numeroDeCliques}</button>
      </div>
    )
  }
}

export default App;
