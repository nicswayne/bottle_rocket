import React from 'react';
import { shallow, render } from 'enzyme';

import List from '.';

it('List component should render without crashing.', () => {
    shallow(<List />);
});

it('List component should match snapshot.', () => {
    const wrapper = render(<List />);

    expect(wrapper).toMatchSnapshot();
});
