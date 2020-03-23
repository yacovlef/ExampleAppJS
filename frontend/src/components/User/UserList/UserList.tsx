import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useLoading from '../../../hooks/useLoading';

import { IUserListRootState } from './user-list.type';

import { fetchUserListAction } from './user-list.action';

import Error from '../../@common/Error';
import Loading from '../../@common/Loading';
import UserListItem from '../UserListItem';

import { UserListLayout } from './user-list.style';

const UserList: FC = () => {
    const { data, loading, error } = useSelector(({ userList }: IUserListRootState) => userList);

    const hasLoading = useLoading(loading);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserListAction())
    }, [dispatch]);

    if (error) {
        return <Error />;
    }

    if (hasLoading) {
        return <Loading />;
    }

    return (
        <UserListLayout>
            {data.map((user) =>
                <UserListItem
                    key={user.id}
                    user={user} />)}
        </UserListLayout>
    );
}

export default UserList;
