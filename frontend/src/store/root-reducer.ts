import { combineReducers } from "redux";

import modalReducer from '../components/@common/Modal/modal.reducer';
import userListReducer from '../components/User/UserList/user-list.reducer';
import userFormReaducer from '../components/User/UserForm/user-form.reducer';
import userFormDeleteReducer from '../components/User/UserFormDelete/user-form-delete.reducer'

export default combineReducers({
    modal: modalReducer,
    userList: userListReducer,
    userForm: userFormReaducer,
    userFormDelete: userFormDeleteReducer
});
