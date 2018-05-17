import React, { Component } from 'react';
import Student from '../components/Student.jsx';


export default class Class extends Component {
  render () {
    console.log('test', this.props);
    return (
      <div>
        <h2>{ this.props.speciality }</h2>
        <div id="speciality" />
        <Student students={this.props.students} />
      </div>
    );
  }
}
