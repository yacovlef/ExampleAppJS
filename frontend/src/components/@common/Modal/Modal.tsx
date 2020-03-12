import React, { FC, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { IModalRootState } from './modal.type';

import { closeModalAction } from './modal.action';

import {
    ModalOverlay,
    ModalLayout,
    ModalHeader,
    ModalTitle,
    ModalClose,
    ModalCloseImage,
    ModalBody } from './modal.style';

const Modal: FC = () => {
    const { hasOpen, title, body } = useSelector(({ modal }: IModalRootState) => modal);

    const dispatch = useDispatch();

    const closeModalActionDispatch = useCallback(() => {
        dispatch(closeModalAction());
    }, [dispatch]);

    if (!hasOpen) {
        return null;
    }

    return (
        <ModalOverlay>
            <ModalLayout>
                <ModalHeader>
                    <ModalTitle>{title}</ModalTitle>

                    <ModalClose onClick={closeModalActionDispatch}>
                        <ModalCloseImage />
                    </ModalClose>
                </ModalHeader>

                <ModalBody>
                    {body}
                </ModalBody>
            </ModalLayout>
        </ModalOverlay>
    );
}

export default Modal;
