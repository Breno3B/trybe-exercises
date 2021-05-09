import React from 'react';
import Pokemon from './Pokemon'
import PropTypes from 'prop-types';

class Pokedex extends React.Component {
    render() {
        const pokemons = this.props.pokemons;
        return (
            <div className="Pokedex">
                { pokemons.map(((pokemon, index) => <Pokemon key={index} pokemon={pokemon}/>)) }
            </div>
        )

    }
}

Pokedex.propTypes = {
    pokemons: PropTypes.arrayOf(Object).isRequired,
  };

export default Pokedex;