import React from 'react';
import { shallow } from 'enzyme';

import Root from '../../Root.jsx';

it('renders correctly', () => {
  const wrapper = shallow(<Root />);
  expect(wrapper).toMatchSnapshot();
});
