import merge from 'lodash/merge';
import { RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';


const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;
  switch (action.type) {
    case RECEIVE_ONE_POKEMON:
      nextState = merge({}, action.payload.items);
      return nextState;
    default:
      return state;
  }
};

export default itemsReducer;
