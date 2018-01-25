// @flow

import React from 'react';
import ErrorComponent from '../shared/Error';
import Loading from '../shared/Loading';

const AsyncWrapper = ({
    children,
    error,
    isLoading,
}: {
    children: any,
    error?: string,
    isLoading?: boolean,
}) => {
    if (isLoading) return <Loading />;
    if (error) return <ErrorComponent error={error} />;
    return children;
};

export default AsyncWrapper;
