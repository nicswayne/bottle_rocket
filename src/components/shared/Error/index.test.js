import React from 'react';
import { shallow, render } from 'enzyme';

import Error from '.';

it('Error component should render without crashing.', () => {
    shallow(<Error />);
});

it('Error component should match snapshot.', () => {
    const wrapper = render(<Error error="Error message." />);

    expect(wrapper).toMatchSnapshot();
});
