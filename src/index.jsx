import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root.jsx';

import classes from '../mocks/classes.json';
import students from '../mocks/students.json';

ReactDOM.render(
  <Root classes={classes} students={students} />,
  document.getElementById('root')
);
