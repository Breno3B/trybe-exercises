// Source: // https://app.betrybe.com/course/front-end/react/components/solutions
import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    
    return(
        <div className="pokemon">
            <ul>
                <li>Nome: {name}</li>
                <li>Tipo: {type}</li>
                <li>{`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</li>
            </ul>
            <div>
                <img src={image} alt={`Pokemon ${name}`} />
            </div>
        </div>
    )
  }
}

Pokemon.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string,
      averageWeight: PropTypes.shape({
        measurementUnit: PropTypes.string,
        value: PropTypes.number
      }),
      image: PropTypes.string,
    }).isRequired,
  };

export default Pokemon;