import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import { fetchMeals } from '../actions';
import Meal from '../components/meal';

const Meals = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchMeals(state.filter));
  }, []);

  const renderMeals = () => {
    if (state.meals.loading) {
      return <h1>loading...</h1>;
    }

    return state.meals.items.map((meal) => (
      <Meal
        name={meal.strMeal}
        image={meal.strMealThumb}
        // recipes={5}
        key={meal.idMeal}
        // handleFilterChange={() => changeFilter(category.strCategory)}
      />
    ));
  };
  return (
    <div>{ renderMeals() }</div>
  );
};

// Meals.propTypes = {
//   category: PropTypes.string.isRequired,
// };

const mapStateToProps = (state) => ({
  meals: state.meals,
  filter: state.filter,
});

export default connect(mapStateToProps)(Meals);
