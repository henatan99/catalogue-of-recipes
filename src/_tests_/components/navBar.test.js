import React from 'react';
import { create } from 'react-test-renderer';

import NavBar from '../../components/navBar';

it('renders', () => {
  const tree = create(<NavBar />).toJSON;
  expect(tree).toMatchSnapshot();
});
