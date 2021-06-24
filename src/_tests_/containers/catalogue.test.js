import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
 
import Catalogue from '../../containers/catalogue';
 
const mockStore = configureStore([]);
 
describe('My Connected React-Redux Component', () => {
  let store;
  let component;
 
  beforeEach(() => {
    store = mockStore({
      categories: {
          loading: true,
          items: [],
          error: null,
      }
    });
 
    component = renderer.create(
      <Provider store={store}>
        <Catalogue />
      </Provider>
    );
  });
 
  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
 
//   it('should dispatch an action on button click', () => {
 
//   });
});