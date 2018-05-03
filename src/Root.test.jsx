import React from 'react';
import renderer from 'react-test-renderer';
import Root from './Root';

it('renders correctly', () => {
  const tree = renderer
    .create(<Root />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
