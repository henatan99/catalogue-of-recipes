import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Meals = ({ category }) => (
  <div>
    <h1>Hi</h1>
    <h1>Hi</h1>
    <h1>Hi</h1>
    <h1>Hi</h1>
    <h1>Hi</h1>
    <h1>
      My
      {category}
    </h1>
  </div>
);

Meals.propTypes = {
  category: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  category: state.filter,
});

export default connect(mapStateToProps)(Meals);
