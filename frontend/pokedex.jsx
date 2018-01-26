import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';
import { HashRouter, Route } from 'react-router-dom';
import {fetchOnePokemon} from './util/api_util.js';
import {RECEIVE_ONE_POKEMON} from './actions/pokemon_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.fetchOnePokemon = fetchOnePokemon;
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, rootEl);
});
