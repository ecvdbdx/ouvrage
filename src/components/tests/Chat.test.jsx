import React from 'react';
import { shallow } from 'enzyme';

import Chat from '../chat/Chat';

it('renders correctly', async () => {
  const wrapper = shallow(<Chat />);
  expect(wrapper).toMatchSnapshot();
});
