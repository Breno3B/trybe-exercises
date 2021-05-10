import { Component } from "react";

class CampoInputNumber extends Component {
    render() {
        const { value, onChange } = this.props;

        let error = undefined;
        if (value <= 0) error = 'Valor precisa ser > 0!';

        return(
            <label>
                Campo Input NUMBER:
                <input
                    name="campoInputNumber"
                    type="number"
                    value={value}
                    onChange={onChange}
                >
                </input>
                <span>
                    {error ? error : ''}
                </span>
            </label>
        )
    }
}

export default CampoInputNumber;
