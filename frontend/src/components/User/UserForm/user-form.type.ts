import { ThunkAction } from 'redux-thunk';
import { AxiosError } from 'axios';

import { IModalActionTypes } from '../../@common/Modal/modal.type';

import { submitUserFormCreateAction } from './user-form.action';

export interface IUserFormValidate {
    password?: string;
}

export interface IUserFormUser {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
}

export interface IUserFormProps {
    submitUserFormAction: typeof submitUserFormCreateAction;
    user?: IUserFormUser;
}

export interface IUserFormState {
    loading: boolean;
    error: AxiosError | null;
}

export interface IUserFormRootState {
    userForm: IUserFormState;
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
    payload: AxiosError;
}

export type ISubmitUserFormActionTypes = ISubmitUserFormRequestAction | ISubmitUserFormSuccessAction | ISubmitUserFormFailureAction;

export type ISubmitUserFormThunkActionTypes = ThunkAction<void, undefined, undefined, ISubmitUserFormActionTypes | IModalActionTypes>;
