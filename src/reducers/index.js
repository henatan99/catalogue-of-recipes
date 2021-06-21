import { combineReducers } from 'redux';
import categories from './categories';
import filter from './filter';

export default combineReducers({ categories, filter });
