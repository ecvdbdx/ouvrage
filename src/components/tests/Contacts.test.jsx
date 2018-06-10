import React from 'react';
import renderer from 'react-test-renderer';
import students from './../../../mocks/students';
import Contacts from '../chat/Contacts';

const openConversationMock = jest.fn();

it('renders correctly', () => {
  const tree = renderer
    .create(<Contacts students={students}
      currentContact={students[0]}
      openConversation={openConversationMock} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

