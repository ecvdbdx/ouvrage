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
      <div className="chat">
        <Contacts students={this.props.students}
          currentContact={this.state.currentContact}
          openConversation={this.openConversation} />
        <Conversation currentContact={this.state.currentContact}/>
      </div>
    );
  }
}
