import React, { FC, useState, useEffect } from 'react';

import { LoadingLayout, LoadingSpinner } from './loading.style';

const Loading: FC = () => {
    const [hasLoading, setHasLoading] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setHasLoading(true);
        }, 1000);

        return () => clearTimeout(timer);
    },[])
    
    if (!hasLoading) {
        return null;
    }

    return (
        <LoadingLayout>
            <LoadingSpinner />
        </LoadingLayout>
    );
};

export default Loading;
