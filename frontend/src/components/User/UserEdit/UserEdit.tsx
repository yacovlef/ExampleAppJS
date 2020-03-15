import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { IUserEditProps } from './user.list.type';

import { openModalAction } from '../../@common/Modal/modal.action';
import { submitUserFormUpdateAction } from '../UserForm/user-form.action';

import Button from '../../@common/Button';
import UserForm from '../UserForm';

const UserEdit: FC<IUserEditProps> = ({ user }) => {
    const dispatch = useDispatch();

    const openModalActionDispatch = () => {
        dispatch(openModalAction({
            title: 'Редактирование пользователя',
            body: <UserForm
                submitUserFormAction={submitUserFormUpdateAction}
                user={user}/>
        }));
    };

    return <Button onClick={openModalActionDispatch}>Редактировать</Button>
};

export default UserEdit;
