import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

import store from './store';

import App from './components';
import ErrorBoundary from './components/@common/ErrorBoundary'
import Modal from './components/@common/Modal';

import { fetchAuthSuccessAction } from './components/Auth/auth.action';

import { IAuthUser } from './components/Auth/auth.type';

const access_token = localStorage.getItem('access_token');

if (access_token) {
    const payload: IAuthUser = {
        access_token,
        ...jwtDecode(access_token)
    };

    store.dispatch(fetchAuthSuccessAction(payload));
}

ReactDOM.render(
    <ErrorBoundary>
        <Provider store={store}>
            <Modal />
            <Router>
                <App />
            </Router>
        </Provider>
    </ErrorBoundary>, document.getElementById('root'));
