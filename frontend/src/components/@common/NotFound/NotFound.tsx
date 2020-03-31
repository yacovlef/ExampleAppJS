import React, { FC } from 'react';

import { NotFoundLayout, NotFoundTitle } from './not-found.style';

const NotFound: FC = () => {
    return (
        <NotFoundLayout>
            <NotFoundTitle>Страница не найдена!</NotFoundTitle>
        </NotFoundLayout>
    );
}

export default NotFound;
