import {
    SUBMIT_USER_FORM_DELETE_REQUEST,
    SUBMIT_USER_FORM_DELETE_SUCCESS,
    SUBMIT_USER_FORM_DELETE_FAILURE,
    ISubmitUserFormDeleteActionTypes,
    ISubmitUserFormDeleteThunkActionTypes
} from './user-form-delete.type';

import { submitUserFormDeleteService } from './user-form-delete.service';

import { fetchUserListAction } from '../UserList/user-list.action';

import { closeModalAction } from '../../@common/Modal/modal.action';

const submitUserFormDeleteRequestAction = (): ISubmitUserFormDeleteActionTypes => {
    return  {
        type: SUBMIT_USER_FORM_DELETE_REQUEST
    }
}

const submitUserFormDeleteSuccessAction = (): ISubmitUserFormDeleteActionTypes => {
    return  {
        type: SUBMIT_USER_FORM_DELETE_SUCCESS
    }
}

const submitUserFormDeleteFailureAction = (error: object): ISubmitUserFormDeleteActionTypes => {
    return  {
        type: SUBMIT_USER_FORM_DELETE_FAILURE,
        payload: error
    }
}

const submitUserFormDeleteAction = (id: number): ISubmitUserFormDeleteThunkActionTypes => (dispatch) => {
    dispatch(submitUserFormDeleteRequestAction());
    
    submitUserFormDeleteService(id)
        .then(() => {
            dispatch(submitUserFormDeleteSuccessAction());

            dispatch(fetchUserListAction());

            dispatch(closeModalAction());
        })
        .catch((error) => dispatch(submitUserFormDeleteFailureAction(error)));
};

export {
    submitUserFormDeleteAction
};
