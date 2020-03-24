import {
    SET_COUNT_USER_PAGINATION,
    FETCH_USER_PAGINATION_REQUEST,
    FETCH_USER_PAGINATION_SUCCESS,
    FETCH_USER_PAGINATION_FAILURE,
    IFetchUserPaginationActionTypes,
    IFetchUserPaginationThunkActionTypes
} from './user-pagination.type';

import { fetchUserListService } from '../UserList/user-list.service';

const setCountUserPaginationAction = (payload: number): IFetchUserPaginationActionTypes => {
    return  {
        type: SET_COUNT_USER_PAGINATION,
        payload
    }
}

const fetchUserPaginationRequestAction = (): IFetchUserPaginationActionTypes => {
    return  {
        type: FETCH_USER_PAGINATION_REQUEST
    }
}

const fetchUserPaginationSuccessAction = (): IFetchUserPaginationActionTypes => {
    return  {
        type: FETCH_USER_PAGINATION_SUCCESS
    }
}

const fetchUserPaginationFailureAction = (payload: object): IFetchUserPaginationActionTypes => {
    return  {
        type: FETCH_USER_PAGINATION_FAILURE,
        payload
    }
}

const fetchUserPaginationAction = (): IFetchUserPaginationThunkActionTypes => (dispatch) => {
    dispatch(fetchUserPaginationRequestAction());
    fetchUserListService()
        .then(() => {
            dispatch(fetchUserPaginationSuccessAction())
        })
        .catch((error) => dispatch(fetchUserPaginationFailureAction(error)));
};

export {
    setCountUserPaginationAction,
    fetchUserPaginationAction
};
