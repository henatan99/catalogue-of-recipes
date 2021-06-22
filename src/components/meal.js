import React from 'react';
import PropTypes from 'prop-types';

const Meal = ({
  name, image, recipes,
}) => (
  <div className="card">
    <img className="meal-img card-img" src={image} alt="meal-img" />
    <h2 className="recipe card-title">{name}</h2>
    <span className="recipe-num card-span">
      {recipes}
      {' '}
      recipes
    </span>
  </div>
);

Meal.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  recipes: PropTypes.number.isRequired,
};

export default Meal;
