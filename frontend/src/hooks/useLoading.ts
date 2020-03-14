import { useState, useEffect } from 'react';

const useLoading = (loading: boolean) => {
    const [ hasLoading, setLoading ] = useState(false);
    
    let timer: number;

    if (loading) {
        timer = setTimeout(() => {
            setLoading(true);
        }, 1000);
    }
    
    if (!loading && hasLoading) {
        setLoading(false);
    }

    useEffect(() => {
        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        }
    });

    return hasLoading;
}

export default useLoading;
