import React, { FC } from 'react';

import { IErrorProps } from './error.type';

import { ErrorLayout, ErrorTitle } from './error.style';

const Error: FC<IErrorProps> = ({ size }) => {
    return (
        <ErrorLayout>
            <ErrorTitle size={size}>Ошибка!</ErrorTitle>
        </ErrorLayout>
    );
}

export default Error;
