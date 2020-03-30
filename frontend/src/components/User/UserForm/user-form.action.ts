import { AxiosError } from 'axios';

import {
    IUserFormUser,
    SUBMIT_USER_FORM_REQUEST,
    SUBMIT_USER_FORM_SUCCESS,
    SUBMIT_USER_FORM_FAILURE,
    ISubmitUserFormActionTypes,
    ISubmitUserFormThunkActionTypes
} from './user-form.type';

import { submitUserFormCreateService, submitUserFormUpdateService } from './user-form.service';

import { fetchUserListAction } from '../UserList/user-list.action';

import { closeModalAction } from '../../@common/Modal/modal.action';

const submitUserFormRequestAction = (): ISubmitUserFormActionTypes => {
    return  {
        type: SUBMIT_USER_FORM_REQUEST
    }
}

const submitUserFormSuccessAction = (): ISubmitUserFormActionTypes => {
    return  {
        type: SUBMIT_USER_FORM_SUCCESS
    }
}

const submitUserFormFailureAction = (payload: AxiosError): ISubmitUserFormActionTypes => {
    return  {
        type: SUBMIT_USER_FORM_FAILURE,
        payload
    }
}

const submitUserFormCreateAction = (data: IUserFormUser): ISubmitUserFormThunkActionTypes => (dispatch) => {
    dispatch(submitUserFormRequestAction());
    
    submitUserFormCreateService(data)
        .then(() => {
            dispatch(submitUserFormSuccessAction());

            dispatch(fetchUserListAction());

            dispatch(closeModalAction());
        })
        .catch((error) => dispatch(submitUserFormFailureAction(error)));
};

const submitUserFormUpdateAction = (data: IUserFormUser): ISubmitUserFormThunkActionTypes => (dispatch) => {
    dispatch(submitUserFormRequestAction());
    
    submitUserFormUpdateService(data)
        .then(() => {
            dispatch(submitUserFormSuccessAction());

            dispatch(fetchUserListAction());

            dispatch(closeModalAction());
        })
        .catch((error) => dispatch(submitUserFormFailureAction(error)));
};

export {
    submitUserFormCreateAction,
    submitUserFormUpdateAction
};
