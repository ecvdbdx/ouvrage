import React from 'react';
import renderer from 'react-test-renderer';

import Root from '../../Root.jsx';
import classes from '../../../mocks/classes.json';
import students from '../../../mocks/students.json';

it('renders correctly', () => {
  const tree = renderer.create(<Root />).toJSON();
  expect(tree).toMatchSnapshot();
});
