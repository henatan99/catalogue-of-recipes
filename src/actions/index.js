import { CHANGE_FILTER } from './actionTypes';

export const changeFilter = (category) => ({
    type: CHANGE_FILTER,
    category,
});