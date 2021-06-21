import axios from 'axios';
import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
} from './actionTypes';

const fetchCategories = () => async (dispatch) => {
  dispatch({ type: FETCH_CATEGORIES_REQUEST });

  try {
    const response = await axios.get(
      'https://www.themealdb.com/api/json/v1/1/categories.php',
    );

    dispatch({ type: FETCH_CATEGORIES_SUCCESS, payload: response.data.categories });
  } catch (error) {
    dispatch({ type: FETCH_CATEGORIES_FAILURE }, error);
  }
};

export default fetchCategories;
