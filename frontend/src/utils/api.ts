import axios from 'axios';

import store from '../store';

import { authLogoutAction } from '../components/Auth/auth.action';

const { protocol, hostname } = window.location;

const { REACT_APP_API_PORT } = process.env;

const instanceAxios = axios.create({
    baseURL: `${protocol}//${hostname}:${REACT_APP_API_PORT}/api/`
});

instanceAxios.interceptors.request.use((config) => {
    const { user } = store.getState().auth;

    if (user) {
        const { access_token } = user;

        config.headers.Authorization = `Bearer ${access_token}`;
    }

    return config;
}, (error) => Promise.reject(error));

instanceAxios.interceptors.response.use((response) => response,
    (error) => {
        const { user } = store.getState().auth;

        if (error.response.status === 401 && user) {
            store.dispatch(authLogoutAction());
        }

    return Promise.reject(error);
});

export default instanceAxios;
