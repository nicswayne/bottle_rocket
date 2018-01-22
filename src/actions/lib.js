// @flow

type ActionCreator = {|
    start: () => Action,
    success: (data: any) => Action,
    error: (error: string) => Action,
|};

const generateActionCreator = (constant: string): ActionCreator => ({
    start: () => ({ type: `${constant}/START` }),

    success: data => ({ type: `${constant}/SUCCESS`, payload: data }),

    error: error => ({
        type: `${constant}/ERROR`,
        error: error || 'There was an unknown error.',
    }),
});

export default generateActionCreator;
