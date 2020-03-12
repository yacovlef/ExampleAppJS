import {
    FETCH_USER_LIST_REQUEST,
    FETCH_USER_LIST_SUCCESS,
    FETCH_USER_LIST_FAILURE,
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
                data: [],
                loading: true,
                error: null
            };

        case FETCH_USER_LIST_SUCCESS:
            return {
                data: action.payload,
                loading: false,
                error: null
            };

        case FETCH_USER_LIST_FAILURE:
            return {
                data: [],
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
}

export default userListReducer;
