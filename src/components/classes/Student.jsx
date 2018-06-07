import React, { Component } from 'react';

export default class Student extends Component {
  render () {
    return (
      <div className="content-student">
        <img className="avatar" src={this.props.avatar} />
        <span className="username">{ this.props.username }</span>
        <span className="lastname">{ this.props.lastName }</span>
        <span className="firstname">{ this.props.firstName }</span>
        <span className="email">{ this.props.email }</span>
      </div>
    );
  }
}

Student.defaultProps = {
  avatar: ['https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png']
};
