import React from 'react';
import Profile from './Profile.jsx';

export default class Root extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      student: this.props.students[1]
    };
  }

  render () {
    return (
      <div>
        <h1>Ouvrage</h1>
        <Profile student={this.state.student}/>
      </div>
    );
  }
}
