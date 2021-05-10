import { Component } from "react";

class CampoSelect extends Component {
    render() {
        const { value, onChange } = this.props;

        return(
            <label>
                Campo select:
                <select name="campoSelect" value={value} onChange={onChange}>
                <option value="Opção 1">Opção 1</option>
                <option value="Opção 2">Opção 2</option>
                <option value="Opção 3">Opção 3</option>
                </select>
            </label>
        )
    }
}

export default CampoSelect;