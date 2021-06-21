import React from 'react';
import PropTypes from 'prop-types';

const Meal = ({
  name, image,
}) => (
  <div>
    <img className="category-img" src={image} alt="meal-img" />
    <h2 className="recipe">{name}</h2>
    {/* <span className="recipe-num">
      {recipes}
      {' '}
      recipes
    </span> */}
  </div>
);

Meal.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
//   recipes: PropTypes.number.isRequired,
//   handleFilterChange: PropTypes.func.isRequired,
};

export default Meal;
