// @flow

import React from 'react';
import { compose, lifecycle, withHandlers, withState } from 'recompose';
import { GoogleApiWrapper } from 'google-maps-react';

import DetailsModal from './detailsModal';
import Footer from '../shared/Footer';

import back from '../../resources/icons/ic_webBack@2x.png';
import map from '../../resources/icons/icon_map@2x.png';

const toggleOpen = () => {
    const slide = document.getElementById('slide');
    return slide ? slide.classList.toggle('opened') : null;
};

const List = ({
    changeIndex,
    data,
    detailIndex,
    google,
    show,
    toggleShow,
}: {
    changeIndex: number => void,
    data: Array<Details>,
    detailIndex: number,
    google: Object,
    show: boolean,
    toggleShow: () => void,
}) => (
    <div>
        <div className="header">
            {show && (
                <button
                    className="button"
                    onClick={() => {
                        toggleShow();
                        toggleOpen();
                    }}
                >
                    <img className="back" src={back} alt="" />
                </button>
            )}
            <div className="text">Lunch Tyme</div>
            <div className="map">
                <img src={map} alt="" />
            </div>
        </div>
        <div className="list-body">
            <div id="slide" className="modal">
                {detailIndex !== null && (
                    <DetailsModal google={google} details={data[detailIndex]} />
                )}
            </div>
            <div className="list">
                {data &&
                    data.length !== 0 &&
                    data.map((restaurant, i) => (
                        <div
                            key={i}
                            className="item"
                            style={{
                                backgroundImage: `url(${
                                    restaurant.backgroundImageURL
                                })`,
                            }}
                            onClick={() => {
                                toggleShow();
                                changeIndex(i);
                                toggleOpen();
                            }}
                        >
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
        </div>
        <Footer />
    </div>
);

const enhance = compose(
    withState('detailIndex', 'updateIndex', null),
    withState('show', 'updateShow', false),
    withHandlers({
        changeIndex: ({ updateIndex }) => index => updateIndex(index),
        toggleShow: ({ updateShow, show }) => () => updateShow(!show),
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
