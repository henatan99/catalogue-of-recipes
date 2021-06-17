import React from 'react';

const SearchForm = () => (
  <div>
    <input type="text" className="input-field" list="category" placeholder="Search any keyword" />
    <datalist id="category">
      <option value="Boston">Boston</option>
      <option value="Cambridge">Cambridge</option>
    </datalist>
  </div>
);

export default SearchForm;
