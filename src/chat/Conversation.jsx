import React from 'react';

export default class Conversation extends React.Component {
  render () {
    return (
      <div id="conversation">
        <h2>La conversation</h2>
        {this.props.currentContact.username}
      </div>
    );
  }
}
