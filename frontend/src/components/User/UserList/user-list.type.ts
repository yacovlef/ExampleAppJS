import { ThunkAction } from 'redux-thunk';

import { IUserListItem } from '../UserListItem/user-list-item.type';

export interface IUserListState {
    data: IUserListItem[];
    loading: boolean;
    error: null | object;
}

export interface IUserListRootState {
    userList: IUserListState;
}

export const FETCH_USER_LIST_REQUEST = 'FETCH_USER_LIST_REQUEST';
export const FETCH_USER_LIST_SUCCESS = 'FETCH_USER_LIST_SUCCESS';
export const FETCH_USER_LIST_FAILURE = 'FETCH_USER_LIST_FAILURE';

interface IFetchUserListRequestAction {
    type: typeof FETCH_USER_LIST_REQUEST;
}

interface IFetchUserListSuccessAction {
    type: typeof FETCH_USER_LIST_SUCCESS;
    payload: IUserListItem[];
}

interface IFetchUserListFailureAction {
    type: typeof FETCH_USER_LIST_FAILURE;
    payload: object;
}

export type IFetchUserListActionTypes = IFetchUserListRequestAction | IFetchUserListSuccessAction | IFetchUserListFailureAction;

export type IFetchUserListThunkActionTypes = ThunkAction<void, undefined, undefined, IFetchUserListActionTypes>;
