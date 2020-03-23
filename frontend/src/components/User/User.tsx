import React from 'react';

import { UserControl } from './user.style';

import UserAdd from './UserAdd';
import UserList from './UserList';
import UserPagination from './UserPagination';

const User = () => {
    return (
        <>
            <UserControl>
                <UserAdd />
            </UserControl>
            
            <UserList />

            <UserPagination />
        </>);
};

export default User;
