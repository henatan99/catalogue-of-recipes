import { CHANGE_FILTER } from '../actions/actionTypes';

// const initialState = {
//   category: 'Beef',
// };

export default function (state = 'Beef', action) {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.payload;
    default:
      return state;
  }
}
