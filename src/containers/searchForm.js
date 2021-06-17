import React from 'react';

const SearchForm = ( {handleFilterChange} ) => {
  const categories = ['CATEGORIES', 'ALL', 'CATEGORY', 'MAIN INGREDIENTS', 
  'AREA'];
  return (
    <div>
      <input type="text" className="input-field" list="category" 
      placeholder="Search any keyword" onChange={handleFilterChange} />
      <datalist id="category" className="filter" name="category" onChange={handleFilterChange}>
        {categories.map((category) => <option key={category} value={category}>{category}</option>)}
      </datalist>
    </div>
  );
}


export default SearchForm;
