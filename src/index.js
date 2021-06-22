import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './index.css';
import App from './App';
// import filter from './reducers/filter';

const initialState = {
  categories: {
    loading: false,
    items: [],
    error: null,
  },
  filter: 'Beef',
  search: 'Pie',
};

const store = configureStore(initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
