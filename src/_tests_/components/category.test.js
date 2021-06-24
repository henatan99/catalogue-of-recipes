import React from 'react';
import { create } from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom'

import Category from '../../components/category';

test('renders when function prop is set to null', () => {
  
  const props = {
    name: 'name',
    image: 'image',
    recipes: 0,
    handleFilterChange: null,
  }

  const jsx = (
    <BrowserRouter>
      <Category {...props} />
    </BrowserRouter>
  )

  const tree = create(jsx).toJSON();
  expect(tree).toMatchSnapshot();

});

test('renders when function prop is set to mock function', () => {
  const handleClick = jest.fn();
  const props = {
    name: 'name',
    image: 'image',
    recipes: 0,
    handleFilterChange: handleClick,
  }

  const jsx = (
    <BrowserRouter>
      <Category {...props} />
    </BrowserRouter>
  )

  const tree = create(jsx).toJSON();
  expect(tree).toMatchSnapshot();

})
