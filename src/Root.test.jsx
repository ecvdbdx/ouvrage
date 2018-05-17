import React from 'react';
import Root from './Root';
import renderer from 'react-test-renderer';
import classes from '../mocks/classes.json';
import students from '../mocks/students.json';

it('renders correctly', () => {
  const tree = renderer
    .create(<Root classes={classes} students={students} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
