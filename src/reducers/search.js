import { CHANGE_SEARCH } from '../actions/actionTypes';

export default function (state = '', action) {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.payload;
    default:
      return state;
  }
}
