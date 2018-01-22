import React from 'react';
import { compose, lifecycle, withHandlers, withState } from 'recompose';
import { GoogleApiWrapper } from 'google-maps-react';

import DetailsModal from './detailsModal';
import Footer from '../shared/Footer';

import back from '../../resources/icons/ic_webBack@2x.png';
import gradient from '../../resources/backgrounds/cellGradientBackground@2x.png';
import map from '../../resources/icons/icon_map@2x.png';

const List = ({ data, google, detailIndex, changeIndex, clearIndex }) => (
    <div>
        <div className="header">
            <div className="text">
                {detailIndex !== null && (
                    <button className="button" onClick={clearIndex}>
                        <img className="back" src={back} alt="" />
                    </button>
                )}
                <strong>Lunch Tyme</strong>
                <img className="map" src={map} alt="" />
            </div>
        </div>
        <div className="list-body">
            {detailIndex !== null && (
                <DetailsModal google={google} details={data[detailIndex]} />
            )}
            {detailIndex === null &&
                data &&
                data.map((restaurant, i) => (
                    <div
                        key={i}
                        className="item"
                        onClick={() => changeIndex(i)}
                    >
                        <img
                            className="background-img"
                            src={restaurant.backgroundImageURL}
                            alt=""
                        />
                        <img className="top-img" src={gradient} alt="" />
                        <div>
                            <div className="name text">
                                <strong>{restaurant.name}</strong>
                                <div className="category">
                                    {restaurant.category}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
        <Footer />
    </div>
);

const enhance = compose(
    withState('detailIndex', 'updateIndex', null),
    withHandlers({
        changeIndex: ({ updateIndex }) => index => updateIndex(index),
        clearIndex: ({ updateIndex }) => () => updateIndex(null),
    }),
    lifecycle({
        componentDidMount() {
            if (this.props.data.length) return;
            this.props.getList();
        },
    }),
    GoogleApiWrapper({
        apiKey: process.env.REACT_APP_GOOGLE_API_KEY || '',
        version: '3',
    })
);

export default enhance(List);
