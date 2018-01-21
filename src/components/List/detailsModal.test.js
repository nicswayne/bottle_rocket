import React from 'react';
import { shallow, render } from 'enzyme';

import DetailsModal from './detailsModal';

it('DetailsModal component should render without crashing.', () => {
    shallow(<DetailsModal google={{}} />);
});

it('DetailsModal component should match snapshot.', () => {
    const wrapper = render(<DetailsModal google={{}} />);

    expect(wrapper).toMatchSnapshot();
});
