import React from 'react';
import Profile from './Profile';
import renderer from 'react-test-renderer';
import Students from '../mocks/students.json';

it('renders correctly', () => {
  const tree = renderer
    .create(<Profile student={Students[1]}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
