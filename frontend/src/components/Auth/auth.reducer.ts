import {
    IAuthState,
    AUTH_LOGIN,
    AUTH_LOGOUT,
    IAuthActionTypes
} from './auth.type';

const initialState: IAuthState = {
    user: null
}

const authReducer = (state = initialState, action: IAuthActionTypes): IAuthState => {
    switch (action.type) {
        case AUTH_LOGIN:
            return {
                user: action.payload
            };

        case AUTH_LOGOUT:
            return {
                user: null
            };

        default:
            return state;
    }
}

export default authReducer;
