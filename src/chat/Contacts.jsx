import React from 'react';

export default class Contacts extends React.Component {
  render () {
    return (
      <div className="list-conversations">
        <h2>Les contacts</h2>
        <ul>
          {
            this.props.students.map((student, index) => (
              <li key={index}
                onClick={() => this.props.openConversation(student)}
                className={this.props.currentContact === student ? 'active' : ''}>
                <div className="contact-conv">
                  <img src={student.avatar} alt={`Photo de profil de ${student.username}`}/>
                  <p>{student.first_name} {student.last_name} <span className="username">({student.username})</span></p>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}
