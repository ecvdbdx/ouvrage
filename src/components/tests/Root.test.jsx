import React from 'react';
import renderer from 'react-test-renderer';
import Root from './../../Root';
import promos from './../../../mocks/classes.json';
import students from './../../../mocks/students.json';

it('renders correctly', () => {
  const tree = renderer.create(<Root promos={promos} students={students}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
