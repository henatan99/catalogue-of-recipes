import { CHANGE_FILTER } from '../actions/actionTypes';

export default function (state = 'LIST_ALL_MEAL_CATEGORIES', action) {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.category;
    default:
      return state;
  }
}
