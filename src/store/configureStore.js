import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

const redux = require('redux');

const { applyMiddleware } = redux;
const thunkMiddleware = require('redux-thunk').default;

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState, 
    composeWithDevTools(applyMiddleware(thunkMiddleware)) 
  );
}
