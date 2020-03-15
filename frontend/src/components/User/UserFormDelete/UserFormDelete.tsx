import React, { FC, FormEvent } from 'react';
import { useDispatch } from 'react-redux';

import {
    UserFormDeleteRow,
    UserFormDeleteForm,
    UserFormDeleteTitle } from './user-form-delete.style';

import Button from '../../@common/Button';

import { IUserFormDeleteProps } from './user-form-delete.type';

import { submitUserFormDeleteAction } from './user-form-delete.action';

const UserFormDelete: FC<IUserFormDeleteProps> = ({ user }) => {
    const { id, firstName, lastName } = user;

    const dispatch = useDispatch();

    const handleOnSubmit = (event: FormEvent) => {
        event.preventDefault();
        
        dispatch(submitUserFormDeleteAction(id));
    };

    return (
        <UserFormDeleteForm onSubmit={handleOnSubmit}>
            <UserFormDeleteRow>
                <UserFormDeleteTitle>{`Удалить пользователя ${firstName} ${lastName}?`}</UserFormDeleteTitle>
            </UserFormDeleteRow>
            <UserFormDeleteRow>
                <Button
                    type="submit"
                    size="large"
                    block>Удалить</Button>
            </UserFormDeleteRow>
        </UserFormDeleteForm>
    );
};

export default UserFormDelete;
