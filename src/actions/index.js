import categories from '../reducers/categories';
import { CHANGE_FILTER, COUNT_LIKES, FETCH_CATEGORIES,
  FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE} from './actionTypes';

export const changeFilter = (category) => ({
  type: CHANGE_FILTER,
  category,
});

export const countLikes = (meal) => ({
  type: COUNT_LIKES,
  meal,
});

export const fetchCategoriesRequest = () => ({
  type: FETCH_CATEGORIES,
})

export const fetchCategoriesSuccess = categories => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: categories,
})

export const fetchCategoriesFailure = error => ({
  type: FETCH_CATEGORIES_FAILURE,
  payload: error
})