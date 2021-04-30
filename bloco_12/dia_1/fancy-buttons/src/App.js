import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    // A função abaixo vincula "manualmente" o `this` à nossa função
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      numeroDeCliques: 0,
      backGroundColor: 'Green'
    }
  }

  handleClick() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))

    if ((this.state.numeroDeCliques % 2) === 0) {
      this.setState((estadoAnterior, _props) => ({
        backGroundColor: 'White'
      }))
      console.log(this.state.backGroundColor)
    } else {
      this.setState((estadoAnterior, _props) => ({
        backGroundColor: 'Green'
      }))
      console.log(this.state.backGroundColor)
    }

    // console.log(this)
  }

  render() {
    return (
      <div>
        <button className={this.state.backGroundColor} onClick={this.handleClick}>Botão: {this.state.numeroDeCliques}</button>
      </div>
    )
  }
}

export default App;
