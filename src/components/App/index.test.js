import React from 'react';
import { shallow, render } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from '.';

const mockStore = configureMockStore([thunk]);

it('renders without crashing.', () => {
    shallow(<App />);
});

it('matches snapshot', () => {
    const store = mockStore({});

    const wrapper = render(
        <Provider store={store}>
            <MemoryRouter>
                <App />
            </MemoryRouter>
        </Provider>
    );

    expect(wrapper).toMatchSnapshot();
});
