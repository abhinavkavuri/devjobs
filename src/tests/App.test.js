import React from "react";
import { render } from "@testing-library/react";
import App from '../components/App';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import reducers from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk))
);

describe('App', () => {

    test('renders App component', () => {
      render(
        <Provider store={store}>
            <App/>
        </Provider>
      );
    });
});
