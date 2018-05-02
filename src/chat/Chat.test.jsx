import React from 'react';
import Chat from './Chat';
import renderer from 'react-test-renderer';
import students from './../../mocks/students.json';

it('renders correctly', () => {
  const tree = renderer
    .create(<Chat students={students} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
