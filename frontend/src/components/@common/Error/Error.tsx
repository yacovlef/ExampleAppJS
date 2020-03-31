import React, { FC } from 'react';

import { IErrorProps } from './error.type';

import { ErrorLayout, ErrorTitle } from './error.style';

const Error: FC<IErrorProps> = ({ size }) => {
    return (
        <ErrorLayout size={size}>
            <ErrorTitle>Ошибка!</ErrorTitle>
        </ErrorLayout>
    );
}

export default Error;
