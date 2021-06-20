import { createStore } from 'redux';
import rootReducer from '../reducers';
const redux = require('redux');

const initialState = {
  loading: false,
  categories: [],
  error: '',
}

const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require('redux-thunk').default;

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware));
}
