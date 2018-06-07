import React from 'react';
import Message from './Message.jsx';
import ChatApi from './ChatApi';

export default class Conversation extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      message: '',
      messages: [],
      autoScrollActive: false
    };
    this.submitMessage = this.submitMessage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.scrollDown = this.scrollDown.bind(this);
    this.setAutoScroll = this.setAutoScroll.bind(this);

    this.refMessageList = React.createRef();

    if (this.props.currentContact) {
      this.retrieveConversation(this.props.currentContact, this.props.me);
      setInterval(() => {
        this.retrieveConversation(this.props.currentContact, this.props.me);
      }, 2000);
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.currentContact !== this.props.currentContact)
      this.retrieveConversation(nextProps.currentContact, this.props.me);
  }

  retrieveConversation (contact, me) {
    ChatApi.getConversation(contact, me).then((messages) => {
      this.setState({
        messages: messages
      });
      this.scrollDown();
    });
  }

  handleChange (event) {
    this.setState({
      message: event.target.value
    });
  }


  submitMessage (event) {
    if (event.key === 'Enter') {
      const textField = event.target;
      const message = textField.value;
      const me = this.props.me;
      const user = this.props.currentContact;
      ChatApi.sendMessage(message, me, user).then((record) => {
        let messages = this.state.messages;
        messages.push(record.fields);
        this.setState({
          messages: messages,
          message: ''
        });
        textField.value = '';
        this.scrollDown();
      });
    }
  }

  scrollDown () {
    if (this.state.autoScrollActive) {
      const nodeElement = this.refMessageList.current;
      nodeElement.scrollTop = nodeElement.scrollHeight;
    }
  }

  setAutoScroll (event) {
    const nodeElement = this.refMessageList.current;
    if (nodeElement === null) return 0;
    const actuallScroll = nodeElement.scrollHeight - nodeElement.offsetHeight;
    if (actuallScroll - nodeElement.scrollTop <= 3) {
      this.setState({
        autoScrollActive: true
      });
    }
    else {
      this.setState({
        autoScrollActive: false
      });
    }
  }

  render () {
    const currentContact = this.props.currentContact;
    const me = this.props.me;
    if (!currentContact) return null;

    return (
      <section className="conversation" ref={this.refMessageList} onScroll={this.setAutoScroll}>
        {
          <div>
            <header>
              <h2>{currentContact.firstName} {currentContact.lastName}</h2>
              <img src={currentContact.avatar} className="user-avatar"/>
            </header>
            <main>
              <ul className="message-list">
                {
                  this.state.messages.map((message, index) => (
                    <Message key={index} message={message} me={me}/>
                  ))
                }
              </ul>
            </main>
            <footer className="message-section">
              <input type="text"
                placeholder="Votre message..."
                onChange={this.handleChange}
                value={this.state.message}
                onKeyPress={this.submitMessage}
              />
            </footer>
          </div>
        }
      </section>
    );
  }
}
