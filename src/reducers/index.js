// @flow

import { combineReducers } from 'redux';

import Constants from '../constants';

function data(state: Array<Details> = [], action: Action): Array<Details> {
    switch (action.type) {
        case `${Constants.GET_ALL_RESTAURANTS}/SUCCESS`:
            if (!action.payload) return state;

            return action.payload;
        case `${Constants.GET_ALL_RESTAURANTS}/ERROR`:
            return [];
        default:
            return state;
    }
}

function error(state: string = '', action: Action): string {
    switch (action.type) {
        case `${Constants.GET_ALL_RESTAURANTS}/ERROR`:
            if (!action.error) return 'Unknown error.';

            return action.error;
        default:
            return state;
    }
}

function isLoading(state: boolean = false, action: Action): boolean {
    switch (action.type) {
        case `${Constants.GET_ALL_RESTAURANTS}/START`:
            return true;

        case `${Constants.GET_ALL_RESTAURANTS}/SUCCESS`:
        case `${Constants.GET_ALL_RESTAURANTS}/ERROR`:
            return false;

        default:
            return state;
    }
}

export default combineReducers({
    data,
    error,
    isLoading,
});
