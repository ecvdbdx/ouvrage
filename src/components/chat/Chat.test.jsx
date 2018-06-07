import React from 'react';
import Chat from './Chat';
import { shallow } from 'enzyme';


it('renders correctly', async () => {
  const wrapper = shallow(<Chat />);
  await wrapper.instance().getStudents().then(() => {
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });
});
