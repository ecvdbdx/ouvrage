import React from 'react';

// import CreateProfil from './components/CreateProfil.jsx';
// import Profile from './Profile.jsx';
// import Chat from './chat/Chat.jsx';
import ClassNavigator from './components/ClassNavigator.jsx';
import Class from './components/Class.jsx';
import Home from './components/Home.jsx';

export default class Root extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
          {/* <h1>Ouvrage</h1>
          <CreateProfil />
          <a href="index.jsx" title="Home page" className="logo">Ouvrage</a>
          <Profile student={this.state.student}/>
          <Chat students={this.props.students} /> */}
         <ClassNavigator promos={this.props.promos} students={this.props.students} />
          <header>
            <h1>Ouvrage - ECV Digital Bordeaux</h1>
          </header>
          {/* <Home promos={this.props.promos} students={this.props.students}/>  */}
      </div>
    );
  }
}
