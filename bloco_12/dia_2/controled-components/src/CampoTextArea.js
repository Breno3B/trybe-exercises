import { Component } from "react";

class CampoTextArea extends Component {
    render() {
        const { value, onChange } = this.props;

        return(
            <label>
                Campo Text Area:
                <textarea
                    name="campoTextArea"
                    value={value}
                    onChange={onChange}
                >
                </textarea>
            </label>
        )
    }

}

export default CampoTextArea;
