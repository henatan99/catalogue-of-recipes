import axios from 'axios';
import { fetchCategoriesFailure, fetchCategoriesSuccess } from '../actions';
import categories from '../reducers/categories';
import { listAllMealCategories } from './apiUrls';

const fetchCategories = () => function (dispatch) {
  dispatch(fetchCategoriesRequest);
  axios.get(listAllMealCategories)
    .then((response) => {
      const categories = response.categories.map((category) => category);
      dispatch(fetchCategoriesSuccess(categories));
    })
    .catch((error) => {
      dispatch(fetchCategoriesFailure(error.message));
    });
};

export default fetchCategories;
