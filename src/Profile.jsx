import React from 'react';


export default class Profile extends React.Component {
  render () {
    return (
      <div>
        <h1>Profile</h1>
        <img src={this.props.student.avatar} alt="avatar"/>
        <p>{this.props.student.first_name},  {this.props.student.last_name}</p>
        <p>{this.props.student.email}</p>
        <p>{this.props.student.birthdate}</p>
      </div>
    );
  }
}
