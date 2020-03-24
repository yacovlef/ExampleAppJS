import api from '../../../utils/api';
import store from '../../../store';

const { userPagination: { take, skip } } = store.getState();

const fetchUserListService = () => {
    return api.get('/users', {params: {take, skip}});
};

export {
    fetchUserListService
};
