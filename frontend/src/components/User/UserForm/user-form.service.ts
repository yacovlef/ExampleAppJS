import api from '../../../utils/api';

import { IUserFormUser } from './user-form.type';

const submitUserFormCreateService = (data: IUserFormUser) => {
    return api.post('/users', data);
};

const submitUserFormUpdateService = (data: IUserFormUser) => {
    const { id, ...user } = data;

    return api.put(`/users/${id}`, user);
};

export {
    submitUserFormCreateService,
    submitUserFormUpdateService
};
