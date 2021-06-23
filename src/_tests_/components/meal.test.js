import React from 'react';
import { create } from 'react-test-renderer';

import Meal from '../../components/meal';

it('renders when no props passed', () => {
    const tree = create(<Meal />).toJSON;
    expect(tree).toMatchSnapshot();
});

it('renders when name props are passed', () => {
    const tree = create(<Meal name="chicken" image="image" author="author" />).toJSON; 
    expect(tree).toMatchSnapshot();
});
  
