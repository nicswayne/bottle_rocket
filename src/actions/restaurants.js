// @flow

import request from 'request';

import Constants from '../constants';
import generateActionCreator from './lib';

const getAllRestaurants = generateActionCreator(Constants.GET_ALL_RESTAURANTS);

export const getList = () => (dispatch: Dispatch): Promise<any> => {
    dispatch(getAllRestaurants.start());

    return request(
        'https://s3.amazonaws.com/br-codingexams/restaurants.json',
        (error, res, body) => {
            if (error) dispatch(getAllRestaurants.error(error));

            dispatch(getAllRestaurants.success(JSON.parse(body).restaurants));
        }
    );
};
