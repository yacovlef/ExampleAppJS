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
    error: null
}

const authReducer = (state = initialState, action: IFetchAuthActionTypes): IAuthState => {
    switch (action.type) {
        case FETCH_AUTH_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_AUTH_SUCCESS:
            return {
                ...state,
                user: action.payload,
                loading: false
            };

        case FETCH_AUTH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
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
