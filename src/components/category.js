import React from 'react';
import PropTypes from 'prop-types';

const Category = ( {catgory} ) => (
  <div className="category-div">
    <img className="category-img" src={category.image} alt="category-img"/>
    <h2 className="recipe">{category.name}</h2>
    <span className="recipe-num">{category.recipes} recipes</span>
  </div>
);

Category.propTypes = {
  catgory: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Category;
