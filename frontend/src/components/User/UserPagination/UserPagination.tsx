import React, { FC } from 'react';

import Button from '../../@common/Button';

import { UserPaginationLayout } from './user-pagination.style';

const UserPagination: FC = () => {
    return (
        <UserPaginationLayout>
            <Button onClick={() => {}} responsive size='large'>Показать ещё...</Button>
        </UserPaginationLayout>
    );
}

export default UserPagination;
