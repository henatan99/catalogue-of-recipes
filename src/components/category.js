import React from 'react';
import PropTypes from 'prop-types';

const Category = ( {mealCategory} ) => (
  <Link to='/Meal' >
    <img className="category-img" src={mealCategory.image} alt="category-img"/>
    <h2 className="recipe">{mealCategory.name}</h2>
    <span className="recipe-num">{mealCategory.recipes} recipes</span>
  </Link>
);

Category.propTypes = {
  mealCategory: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Category;
