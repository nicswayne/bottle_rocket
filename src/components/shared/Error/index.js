// @flow

import React from 'react';

const ErrorComponent = ({ error }: { error: string }) => (
    <div>
        <h5>{error}</h5>
    </div>
);

export default ErrorComponent;
