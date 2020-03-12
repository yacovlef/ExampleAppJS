import { ThunkAction } from 'redux-thunk';

export interface IUserFormState {
    loading: boolean;
    error: null | object;
}

export const SUBMIT_USER_FORM_REQUEST = 'SUBMIT_USER_FORM_REQUEST';
export const SUBMIT_USER_FORM_SUCCESS = 'SUBMIT_USER_FORM_SUCCESS';
export const SUBMIT_USER_FORM_FAILURE = 'SUBMIT_USER_FORM_FAILURE';

interface ISubmitUserFormRequestAction {
    type: typeof SUBMIT_USER_FORM_REQUEST;
}

interface ISubmitUserFormSuccessAction {
    type: typeof SUBMIT_USER_FORM_SUCCESS;
}

interface ISubmitUserFormFailureAction {
    type: typeof SUBMIT_USER_FORM_FAILURE;
    payload: object;
}

export type ISubmitUserFormActionTypes = ISubmitUserFormRequestAction | ISubmitUserFormSuccessAction | ISubmitUserFormFailureAction;

export type ISubmitUserFormThunkActionTypes = ThunkAction<void, undefined, undefined, ISubmitUserFormActionTypes>;
