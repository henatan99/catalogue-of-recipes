import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { changeSearch } from '../actions/index';

const SearchInput = ({ changeSearch }) => {
  const [search, setSearch] = useState('');
  let history = useHistory();
  
  const handleSubmit = () => {
    history.push("/SearchResult");
  }

  const handleChange = (e) => {
    setSearch(e.target.value ? e.target.value : '');
    console.log(changeSearch(search) ? changeSearch(search) : 'Yaya');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={search || ''}
        onChange={handleChange}
      />
    </form>
  );
};

SearchInput.propTypes = {
  changeSearch: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  changeSearch: (search) => dispatch(changeSearch(search)),
});

export default connect(null, mapDispatchToProps)(SearchInput);
