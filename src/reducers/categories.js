import { CHANGE_FILTER } from '../actions/actionTypes';

export default function (state = 'All', action) {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.category;
    default:
      return state;
  }
}
