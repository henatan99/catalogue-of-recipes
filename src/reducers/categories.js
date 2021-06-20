import { CHANGE_FILTER } from '../actions/actionTypes';

export default function (state = 'All', action) {
  switch (action.type) {
    case FETCH_CATEGORIES:
      loading: true;
    case FETCH_CATEGORIES_SUCCESS:
      loading: false
      categories: data
    case FETCH_CATEGORIES_FAILURE:
    default:
      return state;
  }
}
