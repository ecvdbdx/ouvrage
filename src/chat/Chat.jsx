import React from 'react';
import Contacts from './Contacts.jsx';
import Conversation from './Conversation.jsx';

export default class Chat extends React.Component {
  constructor (props) {
    super(props);
    this.openConversation = this.openConversation.bind(this);
    this.state = {
      currentContact: null
    };
  }
  openConversation (contact) {
    this.setState({
      currentContact: contact
    });
  }

  render () {
    return (
      <div>
        <h1>Le chat</h1>
        <Contacts students={this.props.students} openConversation={this.openConversation} />
        {
          this.state.currentContact !== null ?
            <Conversation currentContact={this.state.currentContact}/> : <div />
        }

      </div>
    );
  }
}