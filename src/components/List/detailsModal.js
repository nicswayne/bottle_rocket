// @flow

import React from 'react';
import MapComponent from './map';
import { getOr } from 'lodash/fp';

const detailsModal = ({
    google,
    details,
}: {
    google: Object,
    details: Details,
}) => {
    const { address, city, lat, lng, postalCode, state } = details.location;
    const formattedPhone = getOr(
        'No phone number provided.',
        'contact.formattedPhone',
        details
    );
    const twitter = getOr('', 'contact.twitter', details);
    const { category, name } = details;

    return (
        <div>
            <MapComponent
                google={google}
                zoom={14}
                containerStyle={{
                    height: '180px',
                    position: 'relative',
                }}
                location={{
                    lat,
                    lng,
                }}
                name={name}
            />
            <div className="details-header">
                <div className="name text">
                    {name}
                    <div className="category">{category}</div>
                </div>
            </div>
            <div>
                <div className="name pad-16">{`${address}\n${city}, ${state} ${postalCode}`}</div>
                <div className="name pad-26">{formattedPhone}</div>
                <div className="name pad-26">
                    {twitter ? `@${twitter}` : 'No twitter handle provided.'}
                </div>
            </div>
        </div>
    );
};

export default detailsModal;
