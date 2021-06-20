import { combineReducers } from 'redux';
import filter from './filter';
import categories from './categories';

export default combineReducers({ categories, filter });
