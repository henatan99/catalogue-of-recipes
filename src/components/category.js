import React from 'react';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { changeFilter } from '../actions/index';

const Category = ({
  name, image, recipes, handleFilterChange,
}) => (
  <Link to="/Meals" onClick={handleFilterChange}>
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
  handleFilterChange: PropTypes.func.isRequired,
};

// const mapDispatchToProps = (dispatch) => ({
//   changeFilter: (category) => dispatch(changeFilter(category)),
// });

// export default connect(null, mapDispatchToProps)(Category);
export default Category;
