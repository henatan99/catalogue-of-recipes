import { combineReducers } from 'redux';
import categories from './categories';
import filter from './filter';
import meals from './meals';
import search from './search';

export default combineReducers({
  categories, meals, filter, search,
});
