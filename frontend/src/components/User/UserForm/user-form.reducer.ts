import {
    SUBMIT_USER_FORM_REQUEST,
    SUBMIT_USER_FORM_SUCCESS,
    SUBMIT_USER_FORM_FAILURE,
    ISubmitUserFormActionTypes,
    IUserFormState
} from './user-form.type';

const initialState: IUserFormState = {
    loading: false,
    error: null
}

const userFormReducer = (state = initialState, action: ISubmitUserFormActionTypes): IUserFormState => {
    switch (action.type) {
        case SUBMIT_USER_FORM_REQUEST:
            return {
                loading: true,
                error: null
            };

        case SUBMIT_USER_FORM_SUCCESS:
            return {
                loading: false,
                error: null
            };

        case SUBMIT_USER_FORM_FAILURE:
            return {
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
}

export default userFormReducer;
