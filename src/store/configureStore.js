import { createStore } from 'redux';
import rootReducer from '../reducers';

const initialState = {
  loading: false,
  categories: data,
  error: '',
}

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState);
}
