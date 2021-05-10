import { Component } from "react";

class CampoCheckBox extends Component {
    render() {
        const { value, onChange } = this.props;

        return(
            <label>
                Campo Check Box:
                <input
                    name="campoCheckBox"
                    type="checkbox"
                    value={value}
                    onChange={onChange}
                >
                </input>
            </label>
        )
    }
}

export default CampoCheckBox;