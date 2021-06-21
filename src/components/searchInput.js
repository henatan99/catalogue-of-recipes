import React, { useState } from 'react';
import changeSearch from '../actions/index';

const SearchInput = () => {
  const [search, setSearch] = useState(null);

  const handleChange = (e) => {
    setSearch(e.target.value);
    changeSearch(search);
  };

  return (
    <input
      type="text"
      value={search}
      onChange={handleChange}
    />
  );
};

SearchInput.propTypes = {
  changeSearch: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  changeSearch: (search) => dispatch(changeSearch(search)),
});

export default connect(null, mapDispatchToProps)(SearchInput);
