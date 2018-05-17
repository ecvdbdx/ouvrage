import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root.jsx';
import promos from '../mocks/classes.json';
import students from '../mocks/students.json';

ReactDOM.render(
  <Root promos={promos} students={students} />, document.getElementById('root')
);
