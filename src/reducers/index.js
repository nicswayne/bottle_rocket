import { combineReducers } from 'redux';

import Constants from '../constants';

function data(state = [], action) {
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

function error(state = '', action) {
    switch (action.type) {
        case `${Constants.GET_ALL_RESTAURANTS}/ERROR`:
            if (!action.error) return 'Unknown error.';

            return action.error;
        default:
            return state;
    }
}

function isLoading(state = false, action) {
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
