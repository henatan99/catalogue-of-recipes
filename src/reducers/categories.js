import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  loading: false,
  items: [],
  error: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
        error: '',
      };
    case FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        items: [],
        error: action.payload,
      };
    default:
      return state;
  }
}
