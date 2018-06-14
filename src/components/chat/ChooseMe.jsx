import React from 'react';


export default class ChooseMe extends React.Component {
  render () {
    return (
      <div className="modal">
        <section>
          <h1>Qui êtes-vous ?</h1>
          <ul>
            {
              this.props.students.map((student, index) => (
                <li key={index} onClick={() => this.props.selectMe(student)}>
                  <div>
                    <img src={student.avatar} alt={`Photo de profil de ${student.username}`}/>
                    <p>{student.firstName} {student.lastName} <span className="username">({student.username})</span></p>
                  </div>
                </li>
              ))
            }
          </ul>
        </section>
      </div>
    );
  }
}
