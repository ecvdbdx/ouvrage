import React from 'react';

export default class Conversation extends React.Component {

  render () {
    return (
      <div>
        <h2>La conversation</h2>
        {this.props.currentContact.username}
      </div>
    );
  }
}
