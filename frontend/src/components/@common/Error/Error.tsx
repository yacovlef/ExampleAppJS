import React, { FC } from 'react';

import { IErrorProps } from './error.type';

import { ErrorLayout, ErrorDescription } from './error.style';

const Error: FC<IErrorProps> = ({ description = 'Ошибка!' }) => {
    return (
        <ErrorLayout>
            <ErrorDescription>{description}</ErrorDescription>
        </ErrorLayout>
    );
};

export default Error;
