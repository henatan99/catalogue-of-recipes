import React, { useState } from 'react';
import Category from '../components/category';

const Catalogue = ( {categories, filter} ) => { 
  return (
    <div>
      {categories.filter((mealCategory) => mealCategory.category === filter || filter === 'recipes').map(
        (mealCategory) => (
          <Category mealCategory={mealCategory}/>
        )
      )}
    </div>
  )
};

export default Catalogue;
