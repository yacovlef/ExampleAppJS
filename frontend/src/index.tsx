import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';

import store from './store';

import App from './components';
import ErrorBoundary from './components/@common/ErrorBoundary'
import Modal from './components/@common/Modal';

ReactDOM.render(
    <ErrorBoundary>
        <Provider store={store}>
            <Modal />
            <Router>
                <App />
            </Router>
        </Provider>
    </ErrorBoundary>, document.getElementById('root'));
