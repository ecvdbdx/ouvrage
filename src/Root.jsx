import React from 'react';
// import CreateProfil from './components/CreateProfil';
import Profile from './Profile.jsx';
// import Chat from './chat/Chat.jsx';
// import Class from './components/Class.jsx';
import Home from './components/Home.jsx';

export default class Root extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    // var myClassroom = this.props.classes.map((oneClass, index) => {
    //   var studentsClass = this.props.students.filter(stud => oneClass.students.includes(stud.id));

    //   return (<Class
    //     key={index}
    //     {...oneClass}
    //     students={studentsClass}
    //   />);
    // });

    return (
      <div>
        <a href="index.jsx" title="Home page" className="logo">Ouvrage</a>
        {
          <Profile student={this.props.students[2]}/>
        }
      </div>
    );
  }
}
