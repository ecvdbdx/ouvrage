import React from 'react';
import Contacts from './Contacts.jsx';
import Conversation from './Conversation.jsx';
import ChooseMe from './ChooseMe.jsx';
import { getStudents } from '../../utils/airtable';

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
  }

  componentDidMount () {
    getStudents().then((students) => {
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
    if (this.state.students.length === 0) return null;
    const isIdentified = this.state.me !== null;
    const isConversationOpened = this.state.currentContact !== null;

    const component = !isIdentified
      ? (<ChooseMe students={this.state.students} selectMe={this.selectMe} />)
      : (
        <div>
          <Contacts students={this.state.students}
            currentContact={this.state.currentContact}
            openConversation={this.openConversation} />
          {
            isConversationOpened
              ? (<Conversation currentContact={this.state.currentContact} me={this.state.me} />)
              : null
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
