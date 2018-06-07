import React from 'react';
import Contacts from './Contacts.jsx';
import Conversation from './Conversation.jsx';
import ChooseMe from './ChooseMe.jsx';
import ChatApi from './ChatApi.js';

export default class Chat extends React.Component {
  constructor () {
    super();
    this.openConversation = this.openConversation.bind(this);
    this.selectMe = this.selectMe.bind(this);
    this.state = {
      currentContact: null,
      me: null,
      students: []
    };

    ChatApi.getStudents().then((students) => {
      this.setState({
        students: students,
        me: null
      });
    }).catch((err) => {
      console.log(err);
    });
  }

  openConversation (contact) {
    this.setState({
      currentContact: contact
    });
  }

  selectMe (currentUser) {
    this.setState({
      me: currentUser
    });
  }

  render () {
    const currentContactActif = this.state.currentContact !== null;
    const isMe = this.state.me === null;

    const component = isMe ?
      (
        <ChooseMe students={this.state.students} selectMe={this.selectMe} />
      ) : (
        <div>
          <Contacts students={this.state.students}
            currentContact={this.state.currentContact}
            openConversation={this.openConversation} />
          {
            currentContactActif ?
              (
                <Conversation currentContact={this.state.currentContact} me={this.state.me} />
              ) : null
          }
        </div>
      );

    return (
      <div className="chat">
        {component}
      </div>
    );
  }
}
