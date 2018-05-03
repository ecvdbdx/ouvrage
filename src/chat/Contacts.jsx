import React from 'react';

export default class Contacts extends React.Component {
  render () {
    return (
      <div>
        <h2>Les contacts</h2>
        <ul>
          {
            this.props.students.map((student, index) => (
              <li key={index} onClick={() => this.props.openConversation(student)}>
                {student.username}
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}
