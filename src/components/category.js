import React from 'react';

const Category = ( {catgoryImage, catageoryName, likes} ) => (
  <div className="category-div">
    <img className="category-img" alt="category-img" />
    <h2 className="recipe">{catageoryName}</h2>
    <span className="recipe-num">{likes} recipes</span>
  </div>
);

export default Category;
