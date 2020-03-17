import React, { FC } from 'react';

import Spinner from '../Spinner';

import { LoadingLayout } from './loading.style';

const Loading: FC = () => {
    return (
        <LoadingLayout>
            <Spinner />
        </LoadingLayout>
    );
};

export default Loading;
