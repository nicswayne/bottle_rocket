import generateActionCreator from './lib';

const test = generateActionCreator('TEST');

describe('generate action creator start', () => {
    const runStartTest = expect(test.start());

    it('creates an object that contains a key of "type"', () => {
        runStartTest.toHaveProperty('type');
    });
    it('"type" has string value ending in /START', () => {
        runStartTest.toHaveProperty('type', 'TEST/START');
    });
});

describe('generate action creator success', () => {
    const payload = {
        test: 'test payload',
    };
    const runSuccessTest = expect(test.success(payload));

    it('creates an object that contains a key of "type"', () => {
        runSuccessTest.toHaveProperty('type');
    });
    it('"type" key has string value ending in /SUCCESS', () => {
        runSuccessTest.toHaveProperty('type', 'TEST/SUCCESS');
    });
    it('creates an object that contains a key of "payload"', () => {
        runSuccessTest.toHaveProperty('payload');
    });
    it('adds the argument to the "payload" key', () => {
        runSuccessTest.toHaveProperty('payload', payload);
    });
});

describe('generate action creator error', () => {
    const error = 'this is the error message';
    const defaultError = 'There was an unknown error.';
    const runErrorTest = expect(test.error());

    it('creates an object that contains a key of "type"', () => {
        runErrorTest.toHaveProperty('type');
    });
    it('"type" key has string value ending in /ERROR', () => {
        runErrorTest.toHaveProperty('type', 'TEST/ERROR');
    });
    it('creates an object that contains a key of "error"', () => {
        runErrorTest.toHaveProperty('error');
    });
    it('the error key has a default message if no arguments passed', () => {
        runErrorTest.toHaveProperty('error', defaultError);
    });
    it('adds the argument to the "error" key', () => {
        expect(test.error(error)).toHaveProperty('error', error);
    });
});
