// @flow

import React from 'react';
import { Map, Marker } from 'google-maps-react';

const MapComponent = ({
    google,
    location,
    containerStyle,
    zoom,
    name,
}: {
    google: Object,
    location: { lat: number, lng: number },
    containerStyle: Object,
    zoom: number,
    name: string,
}) => (
    <div className="loc-map">
        <div className="map-content">
            <Map
                google={google}
                zoom={zoom}
                clickableIcons={false}
                initialCenter={location}
                containerStyle={containerStyle}
            >
                <Marker title={name} name={name} position={location} />
            </Map>
        </div>
    </div>
);

export default MapComponent;
