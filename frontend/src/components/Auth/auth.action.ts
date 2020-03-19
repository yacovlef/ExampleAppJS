import {
    IAuthUser,
    AUTH_LOGIN,
    AUTH_LOGOUT,
    IAuthActionTypes
} from './auth.type';

const authLoginAction = (payload: IAuthUser): IAuthActionTypes => {
    return  {
        type: AUTH_LOGIN,
        payload
    }
}

const authLogoutAction = (): IAuthActionTypes => {
    return  {
        type: AUTH_LOGOUT
    }
}

export {
    authLoginAction,
    authLogoutAction
};
