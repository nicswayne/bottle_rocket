import React from 'react';
import MapComponent from './map';

const detailsModal = ({ google }) => (
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
                lat: 32.950787,
                lng: -96.821118,
            }}
            name="test location"
        />
        <div className="details-header">
            <div className="name text">
                <strong>NAME</strong>
                <div className="category">CATEGORY</div>
            </div>
        </div>
        <div className="details">
            <div className="name pad-16">Address</div>
            <div className="name pad-26">phone</div>
            <div className="name pad-26">twitter</div>
        </div>
    </div>
);

export default detailsModal;
