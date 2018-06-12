import React from 'react';
import { shallow } from 'enzyme';

import Conversation from '../chat/Conversation.jsx';

import students from '../../../mocks/students.json';


it('renders correctly', () => {
  const wrapper = shallow(<Conversation currentContact={students[0]} me={students[1]} />);
  expect(wrapper).toMatchSnapshot();
});
