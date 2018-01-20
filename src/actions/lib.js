const generateActionCreator = constant => ({
    start: () => ({ type: `${constant}/START` }),

    success: data => ({ type: `${constant}/SUCCESS`, payload: data }),

    error: error => ({
        type: `${constant}/ERROR`,
        error: error || 'There was an unknown error.',
    }),
});

export default generateActionCreator;
