import {
    SET_COUNT_USER_PAGINATION,
    FETCH_USER_PAGINATION_REQUEST,
    FETCH_USER_PAGINATION_SUCCESS,
    FETCH_USER_PAGINATION_FAILURE,
    IFetchUserPaginationActionTypes,
    IUserPaginationState
} from './user-pagination.type';

const initialState: IUserPaginationState = {
    count: 0,
    take: 5,
    skip: 0,
    loading: false,
    error: null
}

const userPaginationReducer = (state = initialState, action: IFetchUserPaginationActionTypes): IUserPaginationState => {
    switch (action.type) {
        case SET_COUNT_USER_PAGINATION:
            return {
                ...state,
                count: action.payload
            };

        case FETCH_USER_PAGINATION_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_USER_PAGINATION_SUCCESS:
            return {
                ...state,
                loading: false
            };

        case FETCH_USER_PAGINATION_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
}

export default userPaginationReducer;
