import React from 'react';
import { shallow, render } from 'enzyme';

import DetailsModal from './detailsModal';

const details = {
    name: 'name',
    category: 'category',
    location: {
        address: 'address',
        city: 'city',
        lat: 1,
        lng: 2,
        postalCode: 12345,
        state: 'ST',
    },
    contact: {
        formattedPhone: 'phone',
        twitter: 'twitter',
    },
};

it('DetailsModal component should render without crashing.', () => {
    shallow(<DetailsModal google={{}} details={details} />);
});

it('DetailsModal component should match snapshot.', () => {
    const wrapper = render(<DetailsModal google={{}} details={details} />);

    expect(wrapper).toMatchSnapshot();
});
