import deepFreeze from 'deep-freeze';

import Constants from '../constants';
import reducer from './';

const initialState = deepFreeze({
    data: [],
    error: '',
    isLoading: false,
});
const successAction = {
    type: `${Constants.GET_ALL_RESTAURANTS}/SUCCESS`,
    payload: ['test'],
};
const errorAction = {
    type: `${Constants.GET_ALL_RESTAURANTS}/ERROR`,
    error: 'Error message.',
};

describe('Root reducer', () => {
    it('Should set initial state.', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });
});

describe('Root isLoading reducer', () => {
    const isLoadingState = deepFreeze({ isLoading: true });

    it('should set the isLoading property to a boolean value of true on loading state.', () => {
        expect(
            reducer(initialState, {
                type: `${Constants.GET_ALL_RESTAURANTS}/START`,
            })
        ).toHaveProperty('isLoading', true);
    });

    it('should set the isLoading property to a boolean value of false when transitioning from start to error state.', () => {
        expect(reducer(isLoadingState, errorAction)).toHaveProperty(
            'isLoading',
            false
        );
    });

    it('should set the isLoading property to a boolean value of false when transitioning from start to success state.', () => {
        expect(reducer(isLoadingState, successAction)).toHaveProperty(
            'isLoading',
            false
        );
    });
});

describe('Root data reducer', () => {
    const testState = deepFreeze({ data: ['test'] });

    it('should return state if action.payload is undefined.', () => {
        expect(
            reducer(undefined, {
                type: `${Constants.GET_ALL_RESTAURANTS}/SUCCESS`,
            })
        ).toHaveProperty('data', []);
    });
    it('should return action.payload on success.', () => {
        expect(reducer(undefined, successAction)).toHaveProperty('data', [
            'test',
        ]);
    });
    it('should set the data property to an empty array when transitioning from success to error state.', () => {
        expect(
            reducer(testState, {
                type: `${Constants.GET_ALL_RESTAURANTS}/ERROR`,
                error: '',
            })
        ).toHaveProperty('data', []);
    });
});

describe('Root error reducer', () => {
    it('should set the error state to the error string passed through the action.', () => {
        expect(reducer(undefined, errorAction)).toHaveProperty(
            'error',
            'Error message.'
        );
    });
    it('should return "unknown error" if error is not defined', () => {
        expect(
            reducer(undefined, {
                type: `${Constants.GET_ALL_RESTAURANTS}/ERROR`,
            })
        ).toHaveProperty('error', 'Unknown error.');
    });
});
