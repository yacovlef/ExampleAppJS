import {
    SUBMIT_USER_FORM_DELETE_REQUEST,
    SUBMIT_USER_FORM_DELETE_SUCCESS,
    SUBMIT_USER_FORM_DELETE_FAILURE,
    ISubmitUserFormDeleteActionTypes,
    IUserFormDeleteState
} from './user-form-delete.type';

const initialState: IUserFormDeleteState = {
    loading: false,
    error: null
}

const userFormDeleteReducer = (state = initialState, action: ISubmitUserFormDeleteActionTypes): IUserFormDeleteState => {
    switch (action.type) {
        case SUBMIT_USER_FORM_DELETE_REQUEST:
            return {
                loading: true,
                error: null
            };

        case SUBMIT_USER_FORM_DELETE_SUCCESS:
            return {
                loading: false,
                error: null
            };

        case SUBMIT_USER_FORM_DELETE_FAILURE:
            return {
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
}

export default userFormDeleteReducer;
