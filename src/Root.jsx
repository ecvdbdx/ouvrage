import React from 'react';
import Home from './components/Home.jsx';

export default class Root extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      promosJSON: props.promos,
      studentsJSON: props.students,
      chiefList: props.students.filter(student => (student.isChief))
    };
  }

  render () {
    return (
      <div>
        <header>
          <h1>Ouvrage - ECV Digital Bordeaux</h1>
        </header>
        <Home promos={this.state.promosJSON} chiefs={this.state.chiefList}/>
      </div>
    );
  }
}
