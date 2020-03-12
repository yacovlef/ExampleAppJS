import React from 'react';

import { UserControl } from './user.style';

import UserAdd from './UserAdd';
import UserList from './UserList';

const User = () => {
    return (
        <>
            <UserControl>
                <UserAdd />
            </UserControl>
            
            <UserList />
        </>);
};

export default User;
