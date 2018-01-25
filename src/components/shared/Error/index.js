// @flow

import React from 'react';

const ErrorComponent = ({ error }: { error: string }) => (
    <div className="error">
        <h3>{error}</h3>
        Please try again.
        <button
            className="reload text"
            onClick={() => window.location.reload(true)}
        >
            reload
        </button>
    </div>
);

export default ErrorComponent;
