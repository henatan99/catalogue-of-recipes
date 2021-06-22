import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Category = ({
  name, image, recipes, handleFilterChange,
}) => (
  <Link to={`/Meals/${name}`} className="card" onClick={handleFilterChange}>
    <img className="category-img card-img" src={image} alt="category-img" />
    <h2 className="recipe card-title">{name}</h2>
    <span className="recipe-num card-span">
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
  handleFilterChange: PropTypes.func.isRequired,
};

export default Category;
