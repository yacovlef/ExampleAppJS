import api from '../../../utils/api';

const fetchUserListService = (params = {}) => {
    return api.get('/users', {params});
};

export {
    fetchUserListService
};
