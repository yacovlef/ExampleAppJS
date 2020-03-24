import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../../@common/Button';

import { IUserPaginationRootState } from './user-pagination.type'

import { fetchUserPaginationAction } from './user-pagination.action';

import { UserPaginationLayout } from './user-pagination.style';

const UserPagination: FC = () => {
    const { count, limit } = useSelector(({ userPagination }: IUserPaginationRootState) => userPagination);

    const dispatch = useDispatch();

    if (count < limit) {
        return null;
    }

    return (
        <UserPaginationLayout>
            <Button onClick={() => {dispatch(fetchUserPaginationAction())}} responsive size='large'>Показать ещё...</Button>
        </UserPaginationLayout>
    );
}

export default UserPagination;
