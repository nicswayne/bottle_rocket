import React from 'react';
import { shallow, render } from 'enzyme';

import List from '.';

it('List component should render without crashing.', () => {
    shallow(<List getList={jest.fn()} />);
});

it('List component should match snapshot.', () => {
    const wrapper = render(<List getList={jest.fn()} />);

    expect(wrapper).toMatchSnapshot();
});
