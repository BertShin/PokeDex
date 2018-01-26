import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import { Route } from 'react-router-dom';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }



  render () {
    let pokemon = this.props.pokemon;
    const pokemonIndexItems = pokemon.map(
      (poke) => (<PokemonIndexItem key={poke.id} poke={poke}/>));

    return (
      <div>
        <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer}/>
        <ul>
          {pokemonIndexItems}
        </ul>
      </div>
    );
  }
}


export default PokemonIndex;
