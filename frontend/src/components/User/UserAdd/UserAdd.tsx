import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { openModalAction } from '../../@common/Modal/modal.action';

import Button from '../../@common/Button';
import UserForm from '../UserForm';

const UserAdd: FC = () => {
    const dispatch = useDispatch();

    const openModalActionDispatch = useCallback(() => {
        dispatch(openModalAction({
            title: 'Добавление пользователя',
            body: <UserForm />
        }));
    }, [dispatch]);

    return <Button onClick={openModalActionDispatch} responsive size='large'>Добавить пользователя</Button>
};

export default UserAdd;
