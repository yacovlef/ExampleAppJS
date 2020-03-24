import api from '../../../utils/api';
import store from '../../../store';

const fetchUserListService = () => {
    const { userPagination: { take, skip } } = store.getState();

    return api.get('/users', {params: {take, skip}});
};

export {
    fetchUserListService
};
