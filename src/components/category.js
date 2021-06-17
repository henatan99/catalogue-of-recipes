import React from 'react';
import PropTypes from 'prop-types';

const Category = ( {catgoryImage, catageoryName, recipes} ) => (
  <div className="category-div">
    <img className="category-img" src={catgoryImage} alt="category-img"/>
    <h2 className="recipe">{catageoryName}</h2>
    <span className="recipe-num">{recipes} recipes</span>
  </div>
);

Category.propTypes = {
  catgoryImage: PropTypes.objectOf(PropTypes.any).isRequired,
  catageoryName: PropTypes.string.isRequired,
  recipes: PropTypes.number.isRequired
};

export default Category;
