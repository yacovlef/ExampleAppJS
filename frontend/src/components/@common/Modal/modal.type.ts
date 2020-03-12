import { ReactNode } from "react";

export interface IModal {
    title: string;
    body: ReactNode;
}

export interface IModalState {
    hasOpen: boolean;
    title: string | null;
    body: ReactNode;
}

export interface IModalRootState {
    modal: IModalState;
}

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

interface IOpenModalAction {
    type: typeof OPEN_MODAL;
    payload: IModal;
}

interface ICloseModalAction {
    type: typeof CLOSE_MODAL;
}

export type IModalActionTypes = IOpenModalAction | ICloseModalAction;
