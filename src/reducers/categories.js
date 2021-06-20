import { CHANGE_FILTER } from '../actions/actionTypes';

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        loading: true,
      }
    case FETCH_CATEGORIES_SUCCESS:
      return {
        loading: false,
        categories: action.payload,
        error: '',
      }
    case FETCH_CATEGORIES_FAILURE:
      return {
        categories: [],
        error: action.payload,
      }
    default:
      return state;
  }
}
