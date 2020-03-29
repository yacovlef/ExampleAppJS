import axios from 'axios';

import store from '../store';

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
});

export default instanceAxios;
