import React from 'react';
import { shallow } from 'enzyme';

import Home from './../Home';

import promos from './../../../mocks/classes.json';
import students from './../../../mocks/students.json';

it('renders correctly', () => {
  const wrapper = shallow(<Home promos={promos} students={students}/>);
  expect(wrapper).toMatchSnapshot();
});
