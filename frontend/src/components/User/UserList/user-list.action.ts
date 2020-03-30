import { AxiosError } from 'axios';

import store from '../../../store';

import { setCountUserPaginationAction } from '../UserPagination/user-pagination.action';

import { IUserListItem } from '../UserListItem/user-list-item.type';

import {
    FETCH_USER_LIST_REQUEST,
    FETCH_USER_LIST_SUCCESS,
    FETCH_USER_LIST_FAILURE,
    ADD_USER_LIST,
    IFetchUserListActionTypes,
    IFetchUserListThunkActionTypes
} from './user-list.type';

import { fetchUserListService } from './user-list.service';

const fetchUserListRequestAction = (): IFetchUserListActionTypes => {
    return  {
        type: FETCH_USER_LIST_REQUEST
    }
}

const fetchUserListSuccessAction = (payload: IUserListItem[]): IFetchUserListActionTypes => {
    return  {
        type: FETCH_USER_LIST_SUCCESS,
        payload
    }
}

const fetchUserListFailureAction = (payload: AxiosError): IFetchUserListActionTypes => {
    return  {
        type: FETCH_USER_LIST_FAILURE,
        payload
    }
}

const fetchUserListAction = (): IFetchUserListThunkActionTypes => (dispatch) => {
    const { userPagination: { limit: take } } = store.getState();

    dispatch(fetchUserListRequestAction());
    
    fetchUserListService({take})
        .then(({ data: [data, count] }) => {
            dispatch(fetchUserListSuccessAction(data));
            dispatch(setCountUserPaginationAction(count));
        })
        .catch((error) => dispatch(fetchUserListFailureAction(error)));
};

const addUserListAction = (payload: IUserListItem[]): IFetchUserListActionTypes => {
    return  {
        type: ADD_USER_LIST,
        payload
    }
}

export {
    fetchUserListAction,
    addUserListAction
};
