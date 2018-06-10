import React from 'react';
import Chat from '../chat/Chat';
import { shallow } from 'enzyme';

it('renders correctly', async () => {
  const wrapper = shallow(<Chat />);
  expect(wrapper).toMatchSnapshot();
});
