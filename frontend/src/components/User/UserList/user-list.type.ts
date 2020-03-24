import { ThunkAction } from 'redux-thunk';

import { IUserListItem } from '../UserListItem/user-list-item.type';
import { IFetchUserPaginationActionTypes } from '../UserPagination/user-pagination.type';

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
export const ADD_USER_LIST = 'ADD_USER_LIST';

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

interface IAddUserListAction {
    type: typeof ADD_USER_LIST;
    payload: IUserListItem[];
}

export type IFetchUserListActionTypes = IFetchUserListRequestAction | IFetchUserListSuccessAction | IFetchUserListFailureAction | IAddUserListAction;

export type IFetchUserListThunkActionTypes = ThunkAction<void, undefined, undefined, IFetchUserListActionTypes | IFetchUserPaginationActionTypes>;
