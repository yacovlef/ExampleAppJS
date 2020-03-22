import {
    IAuthUser,
    AUTH_LOGIN,
    AUTH_LOGOUT,
    IAuthActionTypes
} from './auth.type';

const authLoginAction = (payload: IAuthUser): IAuthActionTypes => {
    localStorage.setItem('user', JSON.stringify(payload));

    return  {
        type: AUTH_LOGIN,
        payload
    }
}

const authLogoutAction = (): IAuthActionTypes => {
    localStorage.removeItem('user');

    return  {
        type: AUTH_LOGOUT
    }
}

export {
    authLoginAction,
    authLogoutAction
};
