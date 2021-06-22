import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch, useSelector } from 'react-redux';
import { searchMeals, changeSearch } from '../actions';
import Meal from '../components/meal';

const SearchMeals = ({ searchName }) => {
  const dispatch = useDispatch();
  changeSearch(searchName);
  const state = useSelector((state) => state);
  useEffect(() => {
    dispatch(searchMeals(searchName));
  }, []);

  console.log(`current state search is ${searchName} but should be ${state.search} and filter is ${state.filter}`);

  const renderMeals = () => {
    if (state.meals.loading) {
      return <h1>loading...</h1>;
    }

    return state.meals.items.map((meal) => (
      <Meal
        name={meal.strMeal}
        image={meal.strMealThumb}
        key={meal.idMeal}
      />
    ));
  };
  return (
    <div>{ renderMeals() }</div>
  );
};

SearchMeals.propTypes = {
  searchName: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  meals: state.meals,
  search: state.search,
});

const mapDispatchToProps = (dispatch) => ({
  searchMeals: (search) => dispatch(searchMeals(search)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchMeals);
