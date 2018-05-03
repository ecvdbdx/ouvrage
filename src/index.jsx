import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './chat/Chat.jsx';

import students from '../mocks/students.json';

ReactDOM.render(
  <Chat students={students} />,
  document.getElementById('root')
);
