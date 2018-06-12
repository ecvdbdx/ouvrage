import React from 'react';
import { shallow } from 'enzyme';

import CreateProfile from './../profile/CreateProfile.jsx';

it('renders correctly', () => {
  const wrapper = shallow(<CreateProfile />);
  expect(wrapper).toMatchSnapshot();
});
