import React from 'react';
import { shallow, render } from 'enzyme';

import Web from '.';

it('Web component should render without crashing.', () => {
    shallow(<Web />);
});

it('Web component should match snapshot.', () => {
    const wrapper = render(<Web />);

    expect(wrapper).toMatchSnapshot();
});
