import React from 'react';

import CreateProfil from './components/createProfil/CreateProfil.jsx';
import Profile from './components/profile/Profile.jsx';
import Chat from './components/chat/Chat.jsx';
import ClassNavigator from './components/ClassNavigator.jsx';
import Home from './components/home/Home.jsx';
import Header from './components/Header.jsx';
import airtable from './airtable/config.js';

const titles = {
  home: 'Ouvrage',
  createProfil: 'Créer un profil',
  chat: 'Discutez avec vos amis',
  profil: 'Mon profil',
  oneClass: 'Liste des élèves'
};

export default class Root extends React.Component {
  constructor () {
    super();

    this.state = {
      students: [],
      promos: [],
      route: 'home',
      student: null,
      myClass: {},
      myClassStudents: {}
    };

    this.oneClass = this.oneClass.bind(this);
    this.getRoute = this.getRoute.bind(this);
    this.goToProfile = this.goToProfile.bind(this);
  }

  componentDidMount () {
    airtable('Profil').select({ view: 'Grid view' }).eachPage((records, fetchNextPage) => {
      let students = [];
      records.forEach(function (record) {
        students.push({
          aid: record.id,
          ...record.fields
        });
      });

      this.setState({
        students: students,
        student: students[0]
      });

      fetchNextPage();
    }, function (err) {
      if (err) {
        console.error(err);
        return;
      }
    });

    airtable('Class').select({ view: 'Grid view' }).eachPage((records, fetchNextPage) => {
      let promos = [];
      records.forEach(function (record) {
        var chief = record.fields.idChief;

        promos.push({
          aid: record.id,
          ...record.fields,
          idChief: chief && chief[0]
        });
      });

      this.setState({
        promos: promos
      });

      fetchNextPage();
    }, function (err) {
      if (err) {
        console.error(err);
        return;
      }
    });
  }

  getRoute (nameRoute) {
    this.setState({ route: nameRoute });
  }

  oneClass (myClass, students) {
    const studentsClass = students.filter(student => myClass.students.includes(student.aid));
    this.setState({ route: 'oneClass', myClass: myClass, myClassStudents: studentsClass });
  }

  goToProfile (student) {
    this.setState({ route: 'profil', student: student });
  }

  render () {
    let content;
    switch (this.state.route) {
      case 'home':
        content = (<Home promos={this.state.promos} students={this.state.students} oneClass={this.oneClass}/>);
        break;
      case 'createProfil':
        content = (<CreateProfil/>);
        break;
      case 'profil':
        content = (<Profile student={this.state.student}/>);
        break;
      case 'chat':
        content = (<Chat students={this.state.students}/>);
        break;
      case 'oneClass':
        content = (<ClassNavigator promos={this.state.promos} students={this.state.students} />);
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
