import React, { Component } from 'react';

export default class Student extends Component {
    render() {
        
      return (
        <div>
        <h2>{ this.props.username }</h2>
        <div id="username"></div>
     </div>
      );
    }
  }