import api from '../../../utils/api';

const submitUserFormDeleteService = (id: number) => {
    return api.delete(`/users/${id}`);
};

export {
    submitUserFormDeleteService
};
