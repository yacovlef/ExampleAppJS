import { IUserListItem } from '../UserListItem/user-list-item.type';

import {
    FETCH_USER_LIST_REQUEST,
    FETCH_USER_LIST_SUCCESS,
    FETCH_USER_LIST_FAILURE,
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

const fetchUserListFailureAction = (error: object): IFetchUserListActionTypes => {
    return  {
        type: FETCH_USER_LIST_FAILURE,
        payload: error
    }
}

const fetchUserListAction = (): IFetchUserListThunkActionTypes => (dispatch) => {
    dispatch(fetchUserListRequestAction());
    
    fetchUserListService()
        .then(({ data: [data] }) => {
            dispatch(fetchUserListSuccessAction(data))
        })
        .catch((error) => dispatch(fetchUserListFailureAction(error)));
};


export {
    fetchUserListAction
};
