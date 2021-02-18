import React from "react";
import { render } from "@testing-library/react";
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import reducers from '../reducers';

import Card from '../components/Card';
import App from '../components/App';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk))
);

describe('Card', () => {

    test('renders Card component', () => {
      render(
        <Provider store={store}>
        <App>
            <Card />
        </App>
        </Provider>
      );
    });
});
