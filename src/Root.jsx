import React from 'react';
import Profile from './Profile.jsx';

const ProfileLink = props => (<a onClick={props.handleClick} style={{ cursor: 'pointer' }}>click me!</a>);

export default class Root extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      student: this.props.students[0]
    };

    this.loadProfile = this.loadProfile.bind(this);
  }
  loadProfile () {
    this.setState({
      student: this.props.students[1]
    });
  }


  render () {
    return (
      <div>
        <h1>Ouvrage</h1>
        <ProfileLink handleClick={this.loadProfile}/>
        <Profile student={this.state.student}/>
      </div>
    );
  }
}
