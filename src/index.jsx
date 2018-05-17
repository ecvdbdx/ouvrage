import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root.jsx';
import Students from '../mocks/students.json';

ReactDOM.render(
  <Root students={Students}/>,
  document.getElementById('root')
);
