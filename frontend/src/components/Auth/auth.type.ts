export interface IAuthUser {
    email: string;
}

export interface IAuthState {
    user: object | null;
}

export interface IAuthRootState {
    auth: IAuthState;
}

export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

interface IAuthLoginAction {
    type: typeof AUTH_LOGIN;
    payload: IAuthUser
}

interface IAuthLogoutAction {
    type: typeof AUTH_LOGOUT;
}

export type IAuthActionTypes = IAuthLoginAction | IAuthLogoutAction;
