import React from 'react';
import { shallow, render } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import Footer from '.';

it('Footer component should render without crashing.', () => {
    shallow(<Footer />);
});

it('Footer component should match snapshot.', () => {
    const wrapper = render(
        <MemoryRouter>
            <Footer />
        </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
});
