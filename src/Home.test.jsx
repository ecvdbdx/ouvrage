import React from 'react';
import renderer from 'react-test-renderer';
import Home from './components/Home';
import promos from '../mocks/classes.json';

it('renders correctly', () => {
  const tree = renderer.create(<Home promos={promos} chiefs={[[]]}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
