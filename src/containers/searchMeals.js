import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchMeals } from '../actions';
import Meal from '../components/meal';

const SearchMeals = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    dispatch(searchMeals(state.search));
  }, []);

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

const mapStateToProps = (state) => ({
  meals: state.meals,
  search: state.search,
});

export default connect(mapStateToProps)(SearchMeals);
