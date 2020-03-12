import {
    OPEN_MODAL,
    CLOSE_MODAL,
    IModalActionTypes,
    IModal
} from './modal.type';

const openModalAction = (payload: IModal): IModalActionTypes => {
    return  {
        type: OPEN_MODAL,
        payload
    }
}

const closeModalAction = (): IModalActionTypes => {
    return  {
        type: CLOSE_MODAL
    }
}

export {
    openModalAction,
    closeModalAction
};
