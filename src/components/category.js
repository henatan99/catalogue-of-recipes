import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Category = ({ name, image, recipes }) => (
  <Link to="/Meal">
    <img className="category-img" src={image} alt="category-img" />
    <h2 className="recipe">{name}</h2>
    <span className="recipe-num">
      {recipes}
      {' '}
      recipes
    </span>
  </Link>
);

Category.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  recipes: PropTypes.number.isRequired,
};

export default Category;
