import { Component } from "react";

class CampoInputText extends Component {
    render() {
        const { value, onChange } = this.props;

        return(
            <label>
                Campo Input TEXT:
                <input 
                    name="campoInputText"
                    type="text"
                    value={value}
                    onChange={onChange}
                >
                </input>
            </label>
        )
    }
}

export default CampoInputText;