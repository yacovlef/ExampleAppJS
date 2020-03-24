import {
    FETCH_USER_LIST_REQUEST,
    FETCH_USER_LIST_SUCCESS,
    FETCH_USER_LIST_FAILURE,
    ADD_USER_LIST,
    IFetchUserListActionTypes,
    IUserListState
} from './user-list.type';

const initialState: IUserListState = {
    data: [],
    loading: false,
    error: null
}

const userListReducer = (state = initialState, action: IFetchUserListActionTypes): IUserListState => {
    switch (action.type) {
        case FETCH_USER_LIST_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_USER_LIST_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false
            };

        case FETCH_USER_LIST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        case ADD_USER_LIST:
            return {
                ...state,
                data: [
                    ...state.data,
                    ...action.payload
                ]
            };

        default:
            return state;
    }
}

export default userListReducer;
