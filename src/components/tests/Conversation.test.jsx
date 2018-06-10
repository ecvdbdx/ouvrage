import React from 'react';
import renderer from 'react-test-renderer';
import students from '../../../mocks/students.json';
import Conversation from '../chat/Conversation.jsx';

it('renders correctly', () => {
  const tree = renderer
    .create(<Conversation currentContact={students[0]} me={students[1]} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
