import React from 'react';

export default class Message extends React.Component {
  render () {
    const message = this.props.message;
    const myId = this.props.me.airtable_id;
    return (
      <li className={message.first_user_id[0] !== myId ? 'fake' : 'user'}>
        { message.text }
      </li>
    );
  }
}
