import { ThunkAction } from 'redux-thunk';
import { AxiosError } from 'axios';

export interface IAuth {
    username: string;
    password: string;
}

export interface IAuthUser {
    id: number;
    lastName: string;
    firstName: string;
    email: string;
    access_token: string;
}

export interface IAuthState {
    user: IAuthUser | null;
    loading: boolean;
    error: null | AxiosError;
    unauthorized: boolean;
}

export interface IAuthRootState {
    auth: IAuthState;
}

export const FETCH_AUTH_REQUEST = 'FETCH_AUTH_REQUEST';
export const FETCH_AUTH_SUCCESS = 'FETCH_AUTH_SUCCESS';
export const FETCH_AUTH_FAILURE = 'FETCH_AUTH_FAILURE';
export const SET_AUTH_LOGOUT = 'SET_AUTH_LOGOUT';

interface IFetchAuthRequestAction {
    type: typeof FETCH_AUTH_REQUEST;
}

interface IFetchAuthSuccessAction {
    type: typeof FETCH_AUTH_SUCCESS;
    payload: IAuthUser;
}

interface IFetchAuthFailureAction {
    type: typeof FETCH_AUTH_FAILURE;
    payload: AxiosError;
}

interface ISetAuthLogoutAction {
    type: typeof SET_AUTH_LOGOUT;
}

export type IFetchAuthActionTypes = IFetchAuthRequestAction | IFetchAuthSuccessAction | IFetchAuthFailureAction | ISetAuthLogoutAction;

export type IFetchAuthThunkActionTypes = ThunkAction<void, undefined, undefined, IFetchAuthActionTypes>;
