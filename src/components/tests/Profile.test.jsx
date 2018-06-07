import React from 'react';
import Profile from './../profile/Profile';
import renderer from 'react-test-renderer';
import students from './../../../mocks/students.json';

it('renders correctly', () => {
  const tree = renderer
    .create(<Profile student={students[1]}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
