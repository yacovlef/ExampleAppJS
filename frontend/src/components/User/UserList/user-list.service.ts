import api from '../../../utils/api';

const fetchUserListService = () => {
    return api.get('/users');
};

export {
    fetchUserListService
};
