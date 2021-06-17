import { CHANGE_FILTER, COUNT_LIKES } from './actionTypes';

export const changeFilter = (category) => ({
    type: CHANGE_FILTER,
    category,
});

export const countLikes = (meal) => ({
    type: COUNT_LIKES,
    meal,
})