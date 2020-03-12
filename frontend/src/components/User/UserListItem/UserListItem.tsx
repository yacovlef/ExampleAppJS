import React, { FC } from 'react';

import { IUserLIstItemProps } from './user-list-item.type';

import {
    UserListItemLayout,
    UserListItemColOne,
    UserListItemColTwo,
    UserListItemColTree,
    UserListItemRow,
    UserListItemLabel } from './user-list-item.style';

import Button from '../../@common/Button';

const UserListItem: FC<IUserLIstItemProps> = ({ user }) => {
    const {firstName, lastName, email} = user;

    return (
        <UserListItemLayout>
            <UserListItemColOne>
                <UserListItemRow>
                    <UserListItemLabel>Имя:</UserListItemLabel> {firstName}
                </UserListItemRow>

                <UserListItemRow>
                    <UserListItemLabel>Фамилия:</UserListItemLabel> {lastName}
                </UserListItemRow>
            </UserListItemColOne>
            <UserListItemColTwo>
                <UserListItemRow>
                    <UserListItemLabel>Эл. почта:</UserListItemLabel> {email}
                </UserListItemRow>

                <UserListItemRow>
                    <UserListItemLabel>Роль:</UserListItemLabel> Администратор
                </UserListItemRow>
            </UserListItemColTwo>
            <UserListItemColTree>
                <UserListItemRow>
                    <Button>Редактировать</Button>
                </UserListItemRow>

                <UserListItemRow>
                    <Button>Удалить</Button>
                </UserListItemRow>
            </UserListItemColTree>
        </UserListItemLayout>
    );
};

export default UserListItem;
