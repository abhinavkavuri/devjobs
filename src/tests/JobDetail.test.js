import React from "react";
import { render } from "@testing-library/react";
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import reducers from '../reducers';

import JobDetail from '../components/JobDetail';
import App from '../components/App';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk))
);

describe('JobDetail', () => {

    test('renders JobDetail component', () => {
      render(
        <Provider store={store}>
        <App>
            <JobDetail />
        </App>
        </Provider>
      );
    });
});
