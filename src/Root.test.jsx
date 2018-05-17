import React from 'react';
import Root from './Root';
import renderer from 'react-test-renderer';
import Students from '../mocks/students.json';

it('renders correctly', () => {
  const tree = renderer
    .create(<Root students={Students}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
