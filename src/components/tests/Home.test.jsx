import React from 'react';
import renderer from 'react-test-renderer';
import Home from './../home/Home';
import promos from './../../../mocks/classes.json';
import students from './../../../mocks/students.json';

it('renders correctly', () => {
  const tree = renderer.create(<Home promos={promos} students={students}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
