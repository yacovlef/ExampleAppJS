import React, { FC } from 'react';

import { LoadingLayout, LoadingSpinner } from './loading.style';

const Loading: FC = () => {
    return (
        <LoadingLayout>
            <LoadingSpinner />
        </LoadingLayout>
    );
};

export default Loading;
