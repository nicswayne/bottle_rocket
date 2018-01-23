// @flow

import React from 'react';
import { InfoWindow, Map, Marker } from 'google-maps-react';
import { compose, withHandlers, withState } from 'recompose';

const MapComponent = ({
    activeMarker,
    containerStyle,
    google,
    location,
    name,
    showingInfo,
    updateMarkerInfo,
    zoom,
}: {
    activeMarker: Object,
    containerStyle: {
        height: string,
        width: string,
        position: string,
    },
    google: Object,
    location: { lat: number, lng: number },
    name: string,
    showingInfo: boolean,
    updateMarkerInfo: () => void,
    zoom: number,
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
                <InfoWindow marker={activeMarker} visible={showingInfo}>
                    <div className="name">{name}</div>
                </InfoWindow>
                <Marker
                    onMouseover={updateMarkerInfo}
                    onMouseout={updateMarkerInfo}
                    name={name}
                    position={location}
                />
            </Map>
        </div>
    </div>
);

const enhance = compose(
    withState('showingInfo', 'updateShow', false),
    withState('activeMarker', 'updateMapInfo', {}),
    withHandlers({
        updateMarkerInfo: ({ updateShow, showingInfo, updateMapInfo }) => (
            props,
            marker
        ) => {
            updateMapInfo(marker);
            return updateShow(!showingInfo);
        },
    })
);

export default enhance(MapComponent);
