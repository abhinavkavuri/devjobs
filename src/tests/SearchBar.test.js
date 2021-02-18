import React from "react";
import { render, screen  } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import reducers from '../reducers';

import SearchBar from '../components/SearchBar';
import App from '../components/App';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk))
);

describe('SearchBar', () => {

    test('renders Seacrh bar component', () => {
      render(
        <Provider store={store}>
        <App>
            <SearchBar />
        </App>
        </Provider>
      );
    });

    test('renders Seacrh button', () => {
        render(
          <Provider store={store}>
          <App>
              <SearchBar />
          </App>
          </Provider>
        );
        expect(screen.getByText('Search')).toBeInTheDocument();
    });
});
