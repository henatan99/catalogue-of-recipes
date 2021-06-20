import React from 'react';
import PropTypes from 'prop-types';

const Meal = ({ mealName, mealImage, likes }) => (
  <div>
    <nav>
      <ul>
        <li>Preview</li>
        <li>Ingredients</li>
        <li>Preparation</li>
      </ul>
    </nav>
    <img src={mealImage} alt="meal" />
    <div>
      <h1>{mealName}</h1>
      <span>{likes}</span>
      <span className="iconify" data-icon="ant-design:heart-filled" data-inline="false" />
    </div>
    <footer>
      <ul>
        <li>
          <span className="iconify" data-icon="ant-design:star-filled" data-inline="false" />
          <span>Favorite</span>
        </li>
        <li>
          <button type="button">
            <span className="iconify" data-icon="ant-design:heart-filled" data-inline="false" />
          </button>
          <button type="button">Recommend</button>
        </li>
        <li>
          <a href="www.google.com">
            <span className="iconify" data-icon="fa-solid:share-square" data-inline="false" />
          </a>
          <a href="www.google.com">Share</a>
        </li>
      </ul>
    </footer>
  </div>
);

Meal.propTypes = {
  mealName: PropTypes.string.isRequired,
  mealImage: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Meal;
