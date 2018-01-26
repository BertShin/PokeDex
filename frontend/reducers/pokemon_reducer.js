import merge from "lodash/merge";
import { RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';


const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      nextState = merge({}, state, action.payload);
      return nextState;
    case RECEIVE_ONE_POKEMON:
      const pokemon = action.payload.pokemon;
      nextState = merge({}, state, {[pokemon.id]: pokemon});
      return nextState;
    default:
      return state;
  }
};

export default pokemonReducer;
