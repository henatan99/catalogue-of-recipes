import React from 'react';
import { useParams } from 'react-router-dom';
import Meals from '../containers/meals';

function MealsPage() {
  const { id } = useParams();
  console.log(id);
  return (
    <main className="main-container">
      <Meals />
    </main>
  );
}

export default MealsPage;
