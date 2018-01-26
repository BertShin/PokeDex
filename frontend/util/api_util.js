export const fetchAllPokemon = () => {
  return $.ajax({
    url: '/api/pokemon',
    method: 'GET'
  });
};


export const fetchOnePokemon = (pokemonId) => {
  return $.ajax({
    url: `/api/pokemon/${pokemonId}`,
    method: 'GET'
  });
};
