import values from 'lodash/values';

export const selectAllPokemon = state => {
  let pokemon = values(state.entities.pokemon);
  return pokemon;
};


export const selectPokemonItem = (state, itemId) => {
  // console.log(itemId);
  let items = values(itemId);
  return items;
};
