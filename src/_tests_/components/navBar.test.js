import React from 'react';
import { create } from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import NavBar from '../../components/navBar';

test('renders ', () => {
  const jsx = (
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );

  const tree = create(jsx).toJSON();
  expect(tree).toMatchSnapshot();
});
