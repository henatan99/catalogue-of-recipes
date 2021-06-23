import React from 'react';
import { create } from 'react-test-renderer';

import Category from '../../components/category';

it('renders when no props passed', () => {
    const tree = create(<Category />).toJSON;
    expect(tree).toMatchSnapshot();
});

it('renders when name props are passed', () => {
    const tree = create(<Category name="chicken" image="image" recipes={3} />).toJSON; 
    expect(tree).toMatchSnapshot();
});
  
it('renders when handleFilterChange function prop is passed ', () => {
    const handleClick = jest.fn();
    const tree = create(<Category handleFilterChange={handleClick} />).toJSON;
    expect(tree).toMatchSnapshot();
});