import api from '../../../utils/api';

import { IUserLIstItem } from '../UserListItem/user-list-item.type';

const submitUserFormCreateService = (data: IUserLIstItem) => {
    return api.post('/users', data);
};

const submitUserFormUpdateService = (data: IUserLIstItem) => {
    const { id, ...user } = data;

    return api.put(`/users/${id}`, user);
};

export {
    submitUserFormCreateService,
    submitUserFormUpdateService
};
