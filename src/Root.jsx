import React from 'react';
import CreateProfil from './components/createProfil/CreateProfil.jsx';
import Profile from './components/profile/Profile.jsx';
import Chat from './components/chat/Chat.jsx';
import Class from './components/classes/Class.jsx';
import Home from './components/home/Home.jsx';
import Header from './components/Header.jsx';

const titles = {
  home: 'Ouvrage',
  createProfil: 'Créer un profil',
  chat: 'Discutez avec vos amis',
  profil: 'Mon profil',
  oneClass: 'Liste des élèves'
};

export default class Root extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      route: 'home',
      student: props.students[0],
      myClass: {},
      myClassStudents: {}
  };

    this.oneClass = this.oneClass.bind(this);
    this.getRoute = this.getRoute.bind(this);
  }

  getRoute (nameRoute) {
    this.setState({ route: nameRoute });
  }

  oneClass (myClass, students) {
    const studentsClass = students.filter(student => myClass.students.includes(student.id));

    this.setState({ route: 'oneClass', myClass: myClass, myClassStudents: studentsClass });
  }

  render () {
    let content;
    switch (this.state.route) {
      case 'home':
        content = (<Home promos={this.props.promos} students={this.props.students} oneClass={this.oneClass}/>);
        break;
      case 'createProfil':
        content = (<CreateProfil/>);
        break;
      case 'profil':
        content = (<Profile student={this.state.student}/>);
        break;
      case 'chat':
        content = (<Chat students={this.props.students}/>);
        break;
      case 'oneClass':
        content = (<Class key={this.state.myClass.id} {...this.state.myClass} students={this.state.myClassStudents}/>);
        break;
    }

    return (<div>
      <Header title={titles[this.state.route]}/>
      <div>
        <button onClick={() => this.getRoute('home')}>Accueil</button>
        <button onClick={() => this.getRoute('chat')}>Accéder au chat</button>
        <button onClick={() => this.getRoute('profil')}>Mon profil</button>
        <button onClick={() => this.getRoute('createProfil')}>Créer un profil</button>
      </div>
      {content}
    </div>);
  }
}
