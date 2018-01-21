import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import List from './';

const mockStore = configureMockStore([thunk]);

describe('List container', () => {
    const store = mockStore({
        data: [],
        hasError: '',
        isLoading: false,
    });

    const container = (
        <Provider store={store}>
            <List />
        </Provider>
    );

    it('has getList as prop.', () => {
        const wrapper = shallow(<List store={store} />);

        expect(wrapper.props()).toHaveProperty('data', []);
        expect(wrapper.props()).toHaveProperty('hasError', '');
        expect(wrapper.props()).toHaveProperty('isLoading', false);
        expect(wrapper.props()).toHaveProperty('getList');
        expect(wrapper.props().getList).toBeInstanceOf(Function);
    });

    it('should shallow render without crashing.', () => {
        shallow(container);
    });
});
