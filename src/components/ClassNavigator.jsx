import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Class from './Class.jsx';
// import Home from './components/Home.jsx';

export default class ClassNavigator extends React.Component {
  constructor (props) {
    super(props);

    const availableYears = [];
    props.promos.forEach(function(newYear, index){
        availableYears.indexOf(newYear.year) === -1 ?  availableYears.push(newYear.year) : console.log("This item already exists");
    });

    this.state = {
        availableYears: availableYears,
        currentYear: "2017/2018",
        currentSpeciality: "development",
    };
    this.nextYear = this.nextYear.bind(this);
    this.previousYear = this.previousYear.bind(this);

  }
  nextYear() {
    var existYear = this.state.availableYears.indexOf(this.state.currentYear);
    if (existYear < this.state.availableYears.length - 1  ){
        this.setState({
            currentYear: this.state.availableYears[existYear + 1]
        });
    }
    
    
  }
  previousYear() {
    var existYear = this.state.availableYears.indexOf(this.state.currentYear); 
    if (existYear > 0 ){
        this.setState({
            currentYear: this.state.availableYears[existYear - 1]
        });
    }
    
  }
  changeClasses(index){
      this.setState({
          currentSpeciality: index
      });
  }

  renderTabs() {

  }

  render(){

    var currentClass = this.props.promos.filter( oneClass => this.state.currentSpeciality == oneClass.speciality && this.state.currentYear == oneClass.year );

    // var myClassroom = this.props.promos.map((oneClass, index) => {
      var studentsClass = this.props.students.filter(stud => currentClass[0].students.includes(stud.id));



    // });

    var nameClasses = this.props.promos.filter( theClass => this.state.currentYear == theClass.year ).map((titleClass, item) => (
      <div key={item} onClick={() => this.changeClasses(titleClass.speciality)}>{titleClass.speciality}</div>
    ));

    return (
        <div>
            <span>{ this.state.currentYear }</span>
            <button className="previous_year" onClick={this.previousYear}>Previous year</button>
            <button id="nextButton" className="next_year" onClick={this.nextYear}>Next year</button>
            <div>
                { nameClasses }
            </div>
            <div className="wrapper-classes">
                <Class
                {...currentClass}
                students={studentsClass}
                />
            </div>      
        </div>
    );
  }
}