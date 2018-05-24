import React from 'react';

export default class Conversation extends React.Component {
  render () {
    const currentContact = this.props.currentContact;
    if (currentContact === null) {return null;}
    return (
      <div className="conversation">
        {
          <div>
            <header>
              <h2>
                { currentContact.username }
              </h2>
            </header>
            <section>
              <h3>
                <div className="user-avatar" >
                  <img src={currentContact.avatar}/>
                </div>
                <div className="user-info">
                  <a>{currentContact.username}</a>
                </div>
              </h3>
            </section>
          </div>
        }
      </div>
    );
  }
}
