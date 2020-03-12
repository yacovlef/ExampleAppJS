import axios from 'axios';

const { protocol, hostname } = window.location;

const { REACT_APP_API_PORT } = process.env;

export default axios.create({
    baseURL: `${protocol}//${hostname}:${REACT_APP_API_PORT}/api/`
});
