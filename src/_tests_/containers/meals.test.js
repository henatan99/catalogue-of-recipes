import React from "react";
import { screen, render } from "@testing-library/react";
// import { createStore } from "redux";
import Meals from "../../containers/meals";
// import reducer from "./reducer";
import store from "./store";
import configureStore from 'redux-mock-store';
import fetchMeals from '../../actions/index';

const mockStore = configureStore([]);

jest.mock(fetchMeals, () => ({
  getMeals: () => ({ items: [{name:'name', image: 'image', author: 'author'}] })
}));

const initialState = {
	items: [{ name: "mock name", image: 'mock image', author: 'mock author' }],
};

store = mockStore({
    categories: {
        loading: true,
        items: [],
        error: null,
    }
});

const Wrapper = ({ children }) => (
	<Provider store={store}>{children}</Provider>
);

describe("Meals", () => {
  it("should display meals name", async () => {
    render(<Meals />, { wrapper: Wrapper });

    const mealsName = await screen.findByText("mock name");

    expect(mealsName).toBeTruthy();
  });
});