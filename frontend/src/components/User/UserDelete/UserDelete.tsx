import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { IUserFormDeleteProps } from '../UserFormDelete/user-form-delete.type';

import { openModalAction } from '../../@common/Modal/modal.action';

import Button from '../../@common/Button';
import UserFormDelete from '../UserFormDelete';

const UserDelete: FC<IUserFormDeleteProps> = ({ user }) => {
    const dispatch = useDispatch();

    const openModalActionDispatch = () => {
        dispatch(openModalAction({
            title: 'Удаление пользователя',
            body: <UserFormDelete user={user}/>
        }));
    };

    return <Button onClick={openModalActionDispatch}>Удалить</Button>
};

export default UserDelete;
