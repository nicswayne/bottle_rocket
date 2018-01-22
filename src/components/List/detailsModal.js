// @flow

import React from 'react';
import MapComponent from './map';

type Details = {
    name: string,
    category: string,
    contact: {
        formattedPhone: string,
        twitter: string,
    },
    location: {
        address: string,
        city: string,
        lat: number,
        lng: number,
        postalCode: string,
        state: string,
    },
};

const detailsModal = ({
    google,
    details,
}: {
    google: Object,
    details: Details,
}) => {
    const { address, city, lat, lng, postalCode, state } = details.location;
    const { formattedPhone, twitter } = details.contact;
    const { category, name } = details;

    return (
        <div>
            <MapComponent
                google={google}
                zoom={14}
                containerStyle={{
                    height: '180px',
                    width: '100%',
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
            <div className="details">
                <div className="name address pad-16">
                    {`${address}`}
                    <br />
                    {`${city}, ${state} ${postalCode}`}
                </div>
                <div className="name address pad-26">{formattedPhone}</div>
                <div className="name pad-26">@{twitter}</div>
            </div>
        </div>
    );
};

export default detailsModal;
