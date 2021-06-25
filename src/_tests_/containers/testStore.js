import { createStore, combineReducers } from 'redux';
import categoriesReducer from '../../reducers/categories';
import mealsReducer from '../../reducers/meals';
import filterReducer from '../../reducers/filter';
import searchReducer from '../../reducers/search';

const configureStore = () => {
  const store = createStore(
    combineReducers({
      categories: categoriesReducer,
      meals: mealsReducer,
      filter: filterReducer,
      search: searchReducer,
    }),
  );
  return store;
};
export default configureStore;
