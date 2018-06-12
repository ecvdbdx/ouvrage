import React from 'react';
import { shallow } from 'enzyme';

import Contacts from '../chat/Contacts';

import students from './../../../mocks/students';

const openConversationMock = jest.fn();

it('renders correctly', () => {
  const wrapper = shallow(
    <Contacts
      students={students}
      currentContact={students[0]}
      openConversation={openConversationMock}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

