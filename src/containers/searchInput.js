import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { changeFilter } from '../actions/index';

const SearchInput = ({ changeFilter }) => {
  const [search, setSearch] = useState('');
  const history = useHistory();

  const handleSubmit = () => {
    history.push(`/SearchResult/${search}`);
    changeFilter(search);
    setSearch('');
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="form-wrapper">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          value={search}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

SearchInput.defaultProps = {
  changeFilter: null,
};

SearchInput.propTypes = {
  changeFilter: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  changeFilter: (search) => dispatch(changeFilter(search)),
});

export default connect(null, mapDispatchToProps)(SearchInput);
