import { combineReducers } from "redux";

import modalReducer from '../components/@common/Modal/modal.reducer';
import authReducer from '../components/Auth/auth.reducer';
import userListReducer from '../components/User/UserList/user-list.reducer';
import userFormReaducer from '../components/User/UserForm/user-form.reducer';
import userFormDeleteReducer from '../components/User/UserFormDelete/user-form-delete.reducer'
import userPaginationReducer from '../components/User/UserPagination/user-pagination.reducer';

export default combineReducers({
    modal: modalReducer,
    auth: authReducer,
    userList: userListReducer,
    userForm: userFormReaducer,
    userFormDelete: userFormDeleteReducer,
    userPagination: userPaginationReducer
});
