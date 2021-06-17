import React, { useState } from 'react';
import Category from '../components/category';
import SearchForm from './searchForm';

const Catalogue = ( {categories, filter, changeFilter} ) => {
  const filterChange = ({ target: { value } }) => changeFilter(value); 
  const { categoryName, categoryImage, recipes} = categories;
  
  return (
    <div>
      <SearchForm handleFilterChange={(e) => { filterChange(e); }}/>
      <Category />
    </div>
  )
};

export default Catalogue;
