import React, { Component } from 'react';
import Student from '../components/Student.jsx';


export default class Class extends Component {
  render () {
    var myStudents = this.props.students.map((item, index) => <Student key={index} username={item.username} />);
    return (
      <div>
        <h2>{ this.props.speciality }</h2>
        <div id="speciality" />
        <div>{myStudents}</div>
      </div>
    );
  }
}
