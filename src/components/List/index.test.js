import React from 'react';
import { shallow, render } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import List from '.';

it('List component should render without crashing.', () => {
    shallow(<List getList={jest.fn()} />);
});

it('List component should match snapshot.', () => {
    const wrapper = render(
        <MemoryRouter>
            <List getList={jest.fn()} />
        </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
});
