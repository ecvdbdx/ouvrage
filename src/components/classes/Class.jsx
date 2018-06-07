import React, { Component } from 'react';
import Student from './Student.jsx';


export default class Class extends Component {
  render () {
    var myStudents = this.props.students.map((item, index) => <Student key={index} {...this.props.students[index]} />);
    return (
      <div>
        <h2 id="speciality">{ this.props.speciality }</h2>
        <div className="wrapper-students">{myStudents}</div>
      </div>
    );
  }
}
