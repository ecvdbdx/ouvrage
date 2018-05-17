import React from 'react';
import moment from 'moment';

const EditBtn = props => (<button onClick={props.handleClick}>Modifier</button>);

export default class Profile extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      edit: false,
      birthdate: moment(this.props.birthdate).format('YYYY-MM-DD')
    };

    this.handleUpdating = this.handleUpdating.bind(this);
  }

  handleUpdating () {
    if (this.state.edit === false) {
      this.setState({
        edit: true
      });
    } else {
      this.setState({
        edit: false
      });
    }
  }

  handleSubmit (event) {
    event.preventDefault();
    let firstName = event.target.elements.first_name.value,
      lastName = event.target.elements.last_name.value,
      username = event.target.elements.username.value,
      email = event.target.elements.email.value,
      birthdate = event.target.elements.birthdate.value,
      idStudent = event.target.elements.id_student.value;

    var Airtable = require('airtable');
    var base = new Airtable({ apiKey: 'key62edqNCbsONmzJ' }).base('appzZZc8fxLYvDuPi');
    // TODO : idStudent is incorrect, need to get all students from API to get correct ID and then perform update
    base('Profil').update(idStudent, {
      first_name: firstName,
      last_name: lastName,
      username: username,
      email: email,
      birthdate: birthdate
    }, function (err, record) {
      if (err) { console.error(err); return; }
    });
  }

  render () {
    if (this.state.edit) {
      return (
        <div className="profile">
          <EditBtn handleClick={this.handleUpdating} />
          <h1 className="title">{this.props.student.first_name}</h1>
          <div className="avatar">
            <img src={this.props.student.avatar} alt="avatar"/>
          </div>
          <form className="content" onSubmit={this.handleSubmit}>
            <input name="id_student" type="hidden" value={this.props.student.id}/>
            <div>
              <label>Prénom</label>
              <input type="text" id="first_name" name="first_name" defaultValue={this.props.student.first_name}/>
            </div>

            <div>
              <label>Nom de famille</label>
              <input type="text" id="last_name" name="last_name" defaultValue={this.props.student.last_name}/>
            </div>

            <div>
              <label>Username</label>
              <input type="text" id="username" name="username" defaultValue={this.props.student.username}/>
            </div>

            <div>
              <label>Adresse e-mail</label>
              <input type="email" id="email" name="email" defaultValue={this.props.student.email}/>
            </div>

            <div>
              <label>Date de naissance</label>
              <input type="date" id="birthdate" name="birthdate" defaultValue={this.state.birthdate}/>
            </div>
            <input type="submit" value="Submit"/>
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <EditBtn handleClick={this.handleUpdating} />
          <div className="wrap-header">
            <h1 className="title">{this.props.student.first_name} {this.props.student.last_name}</h1>
          </div>
          <div className="wrap-content">
            <div className="avatar">
              <img src={this.props.student.avatar} alt="avatar"/>
            </div>
            <div className="content">
              <p>{this.props.student.first_name},  {this.props.student.last_name}</p>
              <p>{this.props.student.username}</p>
              <p>{this.props.student.email}</p>
              <p>{this.props.student.birthdate}</p>
            </div>
          </div>
        </div>
      );
    }
  }
}
