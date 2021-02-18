import React from "react";
import { render, screen  } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import reducers from '../reducers';

import Header from '../components/Header';
import App from '../components/App';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk))
);

describe('Header', () => {

    test('renders Header component', () => {
      render(
        <Provider store={store}>
        <App>
            <Header />
        </App>
        </Provider>
      );
    });

    test('renders Logo', () => {
        render(
          <Provider store={store}>
          <App>
              <Header />
          </App>
          </Provider>
        );

        expect(screen.getByText('devjobs')).toBeInTheDocument();
    });

});
