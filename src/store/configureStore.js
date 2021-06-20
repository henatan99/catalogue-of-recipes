import { createStore } from 'redux';
import rootReducer from '../reducers';

const initialState = {
  loading: false,
  categories: [],
  error: '',
}

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState);
}
