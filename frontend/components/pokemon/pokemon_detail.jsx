import React from 'react';
import ItemDetailContainer from '../items/item_detail_container';
import ItemDetail from '../items/item_detail';
import { Route } from 'react-router-dom';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);


  }

  componentDidMount() {
    this.props.requestOnePokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.pokemonId !== newProps.match.params.pokemonId) {
      console.log("this is being called");
      this.props.requestOnePokemon(newProps.match.params.pokemonId);
    }
  }

  render(){
    let pokemon = this.props.pokemon;
    let items = this.props.items;
    return (
      <div>
        <h1>{pokemon.name}</h1>
          <ul>
              <li>Attack: {pokemon.attack}</li>
              <li>Defense: {pokemon.defense}</li>
              <li>Poke Type: {pokemon.poke_type}</li>
              <li>Moves: {pokemon.moves}</li>
          </ul>
        <h1>{pokemon.name} Items!</h1>
        <ItemDetail items={items}/>
      </div>
    );
  }
}

export default PokemonDetail;
