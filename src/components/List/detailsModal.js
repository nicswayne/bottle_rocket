import React from 'react';
import MapComponent from './map';

const detailsModal = ({ google, details }) => {
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
                    <strong>{name}</strong>
                    <div className="category">{category}</div>
                </div>
            </div>
            <div>
                <div className="name pad-16">{`${address}\n${city}, ${state} ${postalCode}`}</div>
                <div className="name pad-26">{formattedPhone}</div>
                <div className="name pad-26">@{twitter}</div>
            </div>
        </div>
    );
};

export default detailsModal;
