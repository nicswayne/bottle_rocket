import React from 'react';
import { shallow, render } from 'enzyme';

import Loading from '.';

it('Loading component should render without crashing.', () => {
    shallow(<Loading />);
});

it('Loading component should match snapshot.', () => {
    const wrapper = render(<Loading />);

    expect(wrapper).toMatchSnapshot();
});
