import React from 'react';
import 'isomorphic-fetch';
import { shallow } from 'enzyme';

import Profile from './../profile/Profile';

import students from './../../../mocks/students.json';

it('renders correctly', () => {
  const wrapper = shallow(<Profile student={students[2]}/>);
  expect(wrapper).toMatchSnapshot();
});
