import React from 'react';
import Profile from './Profile.jsx';

export default class Root extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      student: this.props.students[2]
    };
  }


  render () {
    return (
      <div>
        <a href="index.jsx" title="Home page" className="logo">Ouvrage</a>
        <Profile student={this.state.student}/>
      </div>
    );
  }
}
