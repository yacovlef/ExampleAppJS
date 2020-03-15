import { ThunkAction } from 'redux-thunk';

import { IUserListItem } from '../UserListItem/user-list-item.type';
import { IModalActionTypes } from '../../@common/Modal/modal.type';

export interface IUserFormDeleteProps {
    user: IUserListItem;
}

export interface IUserFormDeleteState {
    loading: boolean;
    error: null | object;
}

export const SUBMIT_USER_FORM_DELETE_REQUEST = 'SUBMIT_USER_FORM_DELETE_REQUEST';
export const SUBMIT_USER_FORM_DELETE_SUCCESS = 'SUBMIT_USER_FORM_DELETE_SUCCESS';
export const SUBMIT_USER_FORM_DELETE_FAILURE = 'SUBMIT_USER_FORM_DELETE_FAILURE';

interface ISubmitUserFormDeleteRequestAction {
    type: typeof SUBMIT_USER_FORM_DELETE_REQUEST;
}

interface ISubmitUserFormDeleteSuccessAction {
    type: typeof SUBMIT_USER_FORM_DELETE_SUCCESS;
}

interface ISubmitUserFormDeleteFailureAction {
    type: typeof SUBMIT_USER_FORM_DELETE_FAILURE;
    payload: object;
}

export type ISubmitUserFormDeleteActionTypes = ISubmitUserFormDeleteRequestAction | ISubmitUserFormDeleteSuccessAction | ISubmitUserFormDeleteFailureAction;

export type ISubmitUserFormDeleteThunkActionTypes = ThunkAction<void, undefined, undefined, ISubmitUserFormDeleteActionTypes | IModalActionTypes>;
