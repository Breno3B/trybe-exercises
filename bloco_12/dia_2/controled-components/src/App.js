import { Component } from 'react';
import './App.css';
import CampoTextArea from './CampoTextArea';
import CampoInputNumber from './CampoInputNumber';
import CampoInputText from './CampoInputText';
import CampoSelect from './CampoSelect';
import CampoCheckBox from './CampoCheckBox';

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
          <CampoSelect value={this.state.campoSelect} onChange={this.handleChange} />
          <CampoInputText value={this.state.campoInputText} onChange={this.handleChange} />
          <CampoInputNumber value={this.state.campoInputNumber} onChange={this.handleChange} />
          <CampoTextArea value={this.state.campoTextArea} onChange={this.handleChange} />
          <CampoCheckBox value={this.state.campoTextArea} onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}

export default App;
