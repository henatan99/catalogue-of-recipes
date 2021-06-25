import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Category = ({
  name, image, recipes, handleFilterChange,
}) => (
  <Link to={`/Meals/${name}`} className="card" onClick={handleFilterChange}>
    <img className="category-img card-img" src={image} alt="category-img" />
    <div className="card-info">
      <h2 className="recipe card-title">{name}</h2>
      <span className="recipe-num card-span">
        {recipes}
        {' '}
        recipes
      </span>
    </div>
  </Link>
);

Category.defaultProps = {
  name: '',
  image: '',
  recipes: 0,
  handleFilterChange: null,
};

Category.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  recipes: PropTypes.number,
  handleFilterChange: PropTypes.func,
};

export default Category;
