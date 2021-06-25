import React from 'react';
import PropTypes from 'prop-types';

const Meal = ({
  name, image, author,
}) => (
  <div className="card">
    <img className="meal-img card-img" src={image} alt="meal-img" />
    <div className="card-info">
      <h2 className="recipe card-title">{name}</h2>
      <span className="recipe-num card-span">
        Posted by
        {' '}
        {author}
      </span>
    </div>
  </div>
);

Meal.defaultProps = {
  name: '',
  image: '',
  author: '',
};

Meal.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  author: PropTypes.string,
};

export default Meal;
