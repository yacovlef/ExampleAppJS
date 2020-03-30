import {
    FETCH_AUTH_REQUEST,
    FETCH_AUTH_SUCCESS,
    FETCH_AUTH_FAILURE,
    SET_AUTH_LOGOUT,
    IFetchAuthActionTypes,
    IAuthState
} from './auth.type';

const initialState: IAuthState = {
    user: null,
    loading: false,
    error: null,
    unauthorized: false
}

const authReducer = (state = initialState, action: IFetchAuthActionTypes): IAuthState => {
    switch (action.type) {
        case FETCH_AUTH_REQUEST:
            return {
                ...state,
                loading: true
            };

        case FETCH_AUTH_SUCCESS:
            return {
                ...state,
                user: action.payload,
                loading: false,
                error: null,
                unauthorized: false
            };

        case FETCH_AUTH_FAILURE:
            let unauthorized = false,
                error = null;

            if (action.payload.request.status === 401) {
                unauthorized = true;
            } else {
                error = action.payload;
            }

            return {
                ...state,
                loading: false,
                error,
                unauthorized
            };

        case SET_AUTH_LOGOUT:
            return {
                ...initialState
            };

        default:
            return state;
    }
}

export default authReducer;
