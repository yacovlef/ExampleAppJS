
import { ThunkAction } from 'redux-thunk';

export interface IUserPaginationState {
    count: number;
    loading: boolean;
    error: null | object;
}

export const SET_COUNT_USER_PAGINATION = 'SET_COUNT_USER_PAGINATION';
export const FETCH_USER_PAGINATION_REQUEST = 'FETCH_USER_PAGINATION_REQUEST';
export const FETCH_USER_PAGINATION_SUCCESS = 'FETCH_USER_PAGINATION_SUCCESS';
export const FETCH_USER_PAGINATION_FAILURE = 'FETCH_USER_PAGINATION_FAILURE';

interface ISetCountUserPagination {
    type: typeof SET_COUNT_USER_PAGINATION;
    payload: number;
}

interface IFetchUserPaginationRequestAction {
    type: typeof FETCH_USER_PAGINATION_REQUEST;
}

interface IFetchUserPaginationSuccessAction {
    type: typeof FETCH_USER_PAGINATION_SUCCESS;
}

interface IFetchUserPaginationFailureAction {
    type: typeof FETCH_USER_PAGINATION_FAILURE;
    payload: object;
}

export type IFetchUserPaginationActionTypes = IFetchUserPaginationRequestAction | IFetchUserPaginationSuccessAction | IFetchUserPaginationFailureAction | ISetCountUserPagination;

export type IFetchUserPaginationThunkActionTypes = ThunkAction<void, undefined, undefined, IFetchUserPaginationActionTypes>;
