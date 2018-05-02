import React from 'react';

export default class Contacts extends React.Component {
  isContactActive (element) {
    if (element === this.props.currentContact) {
      return 'active';
    }
  }
  render () {
    return (
      <div id="list-conversations">
        <h2>Les contacts</h2>
        <ul>
          {
            this.props.students.map((student, index) => (
              <li key={index} onClick={() => this.props.openConversation(student)} className={this.isContactActive(student)}>
                <div className="contact-conv">
                  <img src={student.avatar} alt="Phot de profil de {student.username}"/>
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
