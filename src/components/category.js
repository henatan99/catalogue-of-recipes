import React from 'react';
import PropTypes from 'prop-types';

const Category = ( {catgoryImage, catageoryName, likes} ) => (
  <div className="category-div">
    <img className="category-img" alt="category-img" />
    <h2 className="recipe">{catageoryName}</h2>
    <span className="recipe-num">{likes} recipes</span>
  </div>
);

Category.propTypes = {
  catgoryImage: PropTypes.objectOf(PropTypes.any).isRequired,
  catageoryName: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired
};

export default Category;
