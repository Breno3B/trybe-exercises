import React from 'react';
import Pokemon from './Pokemon'
import PropTypes from 'prop-types';

class Pokedex extends React.Component {
    render() {
        return (
            <div className="Pokedex">
                {this.props.pokemons.map(((pokemon, index) => <Pokemon key={index} pokemon={pokemon}/>))}
            </div>
        )

    }
}

Pokedex.propTypes = {
    pokemons: PropTypes.arrayOf(Object).isRequired,
  };

export default Pokedex;