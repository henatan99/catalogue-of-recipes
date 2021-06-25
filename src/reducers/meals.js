import {
  FETCH_MEALS_REQUEST,
  FETCH_MEALS_SUCCESS,
  FETCH_MEALS_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  loading: false,
  items: [],
  error: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_MEALS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_MEALS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
        error: '',
      };
    case FETCH_MEALS_FAILURE:
      return {
        ...state,
        items: [],
        error: action.payload,
      };
    default:
      return state;
  }
}
