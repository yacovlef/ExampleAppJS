import api from '../../utils/api';

import { IAuth } from './auth.type';

const fetchAuthService = (auth: IAuth) => {
    return api.post('/auth/login', auth);
};

export {
    fetchAuthService
};
