import React from 'react';
import renderer from 'react-test-renderer';
import CreateProfil from './../createProfil/CreateProfil.jsx';

it('renders correctly', () => {
  const tree = renderer.create(<CreateProfil/>).toJSON();
  expect(tree).toMatchSnapshot();
});
