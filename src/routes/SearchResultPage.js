import React from 'react';
import { useParams } from 'react-router-dom';
import SearchMeals from '../containers/searchMeals';

function SearchResultPage() {
  const { id } = useParams();
  return (
    <main className="main-container">
      <SearchMeals searchName={id} />
    </main>
  );
}

export default SearchResultPage;
