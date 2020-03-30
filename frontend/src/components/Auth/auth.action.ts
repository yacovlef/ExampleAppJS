import jwtDecode from 'jwt-decode';
import { AxiosError } from 'axios';

import {
    FETCH_AUTH_REQUEST,
    FETCH_AUTH_SUCCESS,
    FETCH_AUTH_FAILURE,
    SET_AUTH_LOGOUT,
    IAuth,
    IAuthUser,
    IFetchAuthActionTypes,
    IFetchAuthThunkActionTypes
} from './auth.type';

import { fetchAuthService } from './auth.service';

const fetchAuthRequestAction = (): IFetchAuthActionTypes => {
    return  {
        type: FETCH_AUTH_REQUEST
    }
}

const fetchAuthSuccessAction = (payload: IAuthUser): IFetchAuthActionTypes => {
    return  {
        type: FETCH_AUTH_SUCCESS,
        payload
    }
}

const fetchAuthFailureAction = (payload: AxiosError): IFetchAuthActionTypes => {
    return  {
        type: FETCH_AUTH_FAILURE,
        payload
    }
}

const authLoginAction = (auth: IAuth): IFetchAuthThunkActionTypes => (dispatch) => {
    dispatch(fetchAuthRequestAction());

    fetchAuthService(auth)
        .then(({ data: { access_token } }) => {
            localStorage.setItem('access_token', access_token);

            const payload: IAuthUser = {
                access_token,
                ...jwtDecode(access_token)
            };

            dispatch(fetchAuthSuccessAction(payload));
        })
        .catch((error) => dispatch(fetchAuthFailureAction(error)));
};

const authLogoutAction = (): IFetchAuthActionTypes => {
    localStorage.removeItem('access_token');
    
    return  {
        type: SET_AUTH_LOGOUT
    }
}

export {
    authLoginAction,
    authLogoutAction,
    fetchAuthSuccessAction
};
