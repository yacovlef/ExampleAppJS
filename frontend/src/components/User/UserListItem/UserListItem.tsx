import React, { FC } from 'react';

import { IUserListItemProps } from './user-list-item.type';

import UserEdit from '../UserEdit';
import UserDelete from '../UserDelete';

import {
    UserListItemLayout,
    UserListItemColOne,
    UserListItemColTwo,
    UserListItemColTree,
    UserListItemRow,
    UserListItemLabel } from './user-list-item.style';

const UserListItem: FC<IUserListItemProps> = ({ user }) => {
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
                    <UserEdit user={user} />
                </UserListItemRow>

                <UserListItemRow>
                    <UserDelete user={user} />
                </UserListItemRow>
            </UserListItemColTree>
        </UserListItemLayout>
    );
};

export default UserListItem;
