import {
    OPEN_MODAL,
    CLOSE_MODAL,
    IModalActionTypes,
    IModalState
} from './modal.type';

const initialState: IModalState = {
    hasOpen: false,
    title: null,
    body: null
}

const modalReducer = (state = initialState, action: IModalActionTypes): IModalState => {
    switch (action.type) {
        case OPEN_MODAL:
            const { title, body } = action.payload;

            return {
                hasOpen: true,
                title,
                body
            };

        case CLOSE_MODAL:
            return {
                hasOpen: false,
                title: null,
                body: null
            };

        default:
            return state;
    }
}

export default modalReducer;
