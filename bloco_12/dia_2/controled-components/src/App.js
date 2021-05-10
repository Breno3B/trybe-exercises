import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      campoSelect: '',
      campoInputText: '',
      campoInputNumber: 0,
      campoTextArea: '',
      campoCheckBox: false,
    }
  }

  handleChange = ({target}) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="App">
        <form>
          <label>
            Campo select:
            <select name="campoSelect" value={this.state.campoSelect} onChange={this.handleChange}>
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
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
          Campo Input NUMBER:
            <input
              name="campoInputNumber"
              type="number"
              value={this.state.campoInputNumber}
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            Campo Text Area:
            <textarea
              name="campoTextArea"
              value={this.state.campoTextArea}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Campo Check Box:
            <input
              name="campoCheckBox"
              type="checkbox"
              value={this.state.campoCheckBox}
              onChange={this.handleChange}
            ></input>
          </label>
        </form>
      </div>
    )
  }
}

export default App;
