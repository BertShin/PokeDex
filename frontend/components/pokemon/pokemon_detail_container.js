import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestOnePokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';
// import { selectOnePokemon } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {
    pokemon: state.entities.pokemon[ownProps.match.params.pokemonId],
    items: state.entities.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestOnePokemon: (pokemonId) => dispatch(requestOnePokemon(pokemonId))
  };
};



export default withRouter(connect(mapStateToProps,mapDispatchToProps)(PokemonDetail));
