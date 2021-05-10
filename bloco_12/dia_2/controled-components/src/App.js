import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.handleCampoSelectChange = this.handleCampoSelectChange.bind(this);
    this.handleCampoInputTextChange = this.handleCampoInputTextChange.bind(this);

    this.state = {
      campoSelect: '',
      campoInputText: '',
      campoInputNumber: 0,
    }
  }

  handleCampoSelectChange(event) {
    this.setState({
      campoSelect: event.target.value,
    });
  }

  handleCampoInputTextChange(event) {
    this.setState({
      campoInputTextcampoInputText: event.target.value,
    });
  }

  render() {
    return (
      <div className="App">
        <form>
          <label>
            Campo select:
            <select name="campoSelect" value={this.state.campoSelect} onChange={this.handleCampoSelectChange}>
              <option value="Opção 1">Opção 1</option>
              <option value="Opção 2">Opção 2</option>
              <option value="Opção 3">Opção 3</option>
            </select>
          </label>
          <label>
            Campo Input TEXT:
            <input 
              name="campoInputText"
              type="text"
              value={this.state.campoInputText}
              onChange={this.handleCampoInputTextChange}
            >
            </input>
          </label>
          <label>
          Campo Input NUMBER:
            <input name="campoInputNumber" type="number"></input>
          </label>
          <label>
            Campo Text Area:
            <textarea name="campo-textarea" />
          </label>
        </form>
      </div>
    )
  }
}

export default App;
