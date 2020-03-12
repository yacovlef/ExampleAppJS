import React, { FC, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { IUserListRootState } from './user-list.type';

import { fetchUserListAction } from './user-list.action';

import Error from '../../@common/Error';
import Loading from '../../@common/Loading';
import UserListItem from '../UserListItem';

import { UserListLayout } from './user-list.style';

const UserList: FC = () => {
    const {data, loading, error} = useSelector(({ userList }: IUserListRootState) => userList);

    const dispatch = useDispatch();

    const fetchUserListActionDispatch = useCallback(() => {
        dispatch(fetchUserListAction())
    }, [dispatch]);

    useEffect(() => {
        fetchUserListActionDispatch();
    }, [fetchUserListActionDispatch]);

    if (error) {
        return <Error />;
    }

    if (loading) {
        return <Loading />;
    }

    return (
        <UserListLayout>
            {data.map(({id, ...user}) =>
                <UserListItem
                    key={id}
                    user={user} />)}
        </UserListLayout>
    );
}

export default UserList;
