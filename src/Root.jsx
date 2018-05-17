import React from 'react';
import Class from './components/Class.jsx';

export default class Root extends React.Component {
  render () {
    console.log("class", this.props.classes);
    console.log("stunder", this.props.students);
    return (
      <div>
        <h1>Ouvrage</h1>
        <Class {...this.props.classes[0]} students={this.props.students} />
      </div>
    );
  }
}
