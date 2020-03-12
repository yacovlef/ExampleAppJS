import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { openModalAction } from '../../@common/Modal/modal.action';
import { submitUserFormCreateAction } from '../UserForm/user-form.action';

import Button from '../../@common/Button';
import UserForm from '../UserForm';

const UserAdd: FC = () => {
    const dispatch = useDispatch();

    const openModalActionDispatch = () => {
        dispatch(openModalAction({
            title: 'Добавление пользователя',
            body: <UserForm
                submitUserFormAction={submitUserFormCreateAction} />
        }));
    };

    return <Button onClick={openModalActionDispatch} responsive size='large'>Добавить пользователя</Button>
};

export default UserAdd;
