import * as APIUtil from '../util/api_util.js';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_ONE_POKEMON = 'RECEIVE_ONE_POKEMON';

export const receiveAllPokemon = (payload) => ({
  type: RECEIVE_ALL_POKEMON,
  payload
});

export const receiveOnePokemon = (payload) => ({
  type: RECEIVE_ONE_POKEMON,
  payload
});

export const requestAllPokemon = () => ((dispatch) => {
  APIUtil.fetchAllPokemon().then((serverPokemon) => {
    return dispatch(receiveAllPokemon(serverPokemon));
  });
});

export const requestOnePokemon = (pokemonId) => ((dispatch) => {
  APIUtil.fetchOnePokemon(pokemonId).then((serverPokemon) => {
    return dispatch(receiveOnePokemon(serverPokemon));
  });
});
