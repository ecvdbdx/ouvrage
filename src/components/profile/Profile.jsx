import React from 'react';
import moment from 'moment';
import { getIdAirTable, destroyUser } from '../../utils/airtable';
import 'isomorphic-fetch';

const EditBtn = props => (<button onClick={props.handleClick}>Modifier</button>);

export default class Profile extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      edit: false,
      birthdate: moment(this.props.birthdate).format('YYYY-MM-DD'),
      githubData: [],
      githubRepoData: []
    };

    this.handleUpdating = this.handleUpdating.bind(this);
  }

  componentDidMount ()
  {
    fetch('https://api.github.com/users/' + this.props.student.username)
      .then(resp => {
        if(resp.ok) {
          resp.json().then(res => {
            console.log(res);
            this.setState({
              githubData: res
            });
          });
        } else {
          console.log('Mauvaise réponse du réseau');
        }
      })
      .catch(err => console.log(`ERROR in fetchJson : ${err}`));
    fetch('https://api.github.com/users/' + this.props.student.username + '/repos')
      .then(resp => {
        if(resp.ok) {
          resp.json().then(res => {
            console.log(res[0]);
            this.setState({
              githubRepoData: res
            });
          });
        } else {
          console.log('Mauvaise réponse du réseau');
        }
      })
      .catch(err => console.log(`ERROR in fetchJson : ${err}`));
  }

  handleUpdating () {
    this.setState({ edit: !this.state.edit });
  }

  handleSubmit (event) {
    event.preventDefault();
    let firstName = event.target.elements.first_name.value,
      lastName = event.target.elements.last_name.value,
      username = event.target.elements.username.value,
      email = event.target.elements.email.value,
      birthdate = event.target.elements.birthdate.value,
      idStudent = event.target.elements.id_student.value;
    console.log('Edit asked. Values : ');
    console.log('firstname : ' + firstName);
    console.log('lastname : ' + lastName);
    console.log('username : ' + username);
    console.log('email : ' + email);
    console.log('birthdate : ' + birthdate);
    console.log('idStudent : ' + idStudent);
  }

  render () {
    const { id, firstName, lastName, username, email, avatar } = this.props.student;

    return (
      <div id="show-profile">
        <div className="wrap-header">
          <h1 className="title">{firstName} {lastName}</h1>
          <EditBtn handleClick={this.handleUpdating} />
          <button onClick={() => getIdAirTable(id, destroyUser)}>Supprimer</button>
        </div>
        {this.state.edit ? (
          <div className="wrap-content">
            <div className="avatar">
              <img src={avatar} alt="avatar"/>
            </div>
            <div className="content">
              <form onSubmit={this.handleSubmit}>
                <input name="id_student" type="hidden" value={id}/>
                <div className="wrap-input">
                  <label>Prénom</label>
                  <input type="text" id="first_name" name="first_name" defaultValue={firstName}/>
                </div>
                <div className="wrap-input">
                  <label>Nom de famille</label>
                  <input type="text" id="last_name" name="last_name" defaultValue={lastName}/>
                </div>
                <div className="wrap-input">
                  <label>Username</label>
                  <input type="text" id="username" name="username" defaultValue={username}/>
                </div>
                <div className="wrap-input">
                  <label>Adresse e-mail</label>
                  <input type="email" id="email" name="email" defaultValue={email}/>
                </div>
                <div className="wrap-input">
                  <label>Date de naissance</label>
                  <input type="date" id="birthdate" name="birthdate" defaultValue={this.state.birthdate}/>
                </div>
                <input type="submit" value="Submit"/>
              </form>
            </div>
          </div>
        ) : (
          <div className="wrap-content">
            <div className="wrap-datas">
              <div className="avatar">
                <img src={avatar ? avatar : this.state.githubData.avatar_url} alt="avatar"/>
              </div>

              <div className="github">
                <h2 className="subtitle">Profil Github</h2>
                <p><span className="key">Login : </span>{this.state.githubData.login}</p>
                <p><span className="key">Created at : </span>{moment(this.state.githubData.created_at).format('DD-MM-YYYY')}</p>
                <p><span className="key">Followers : </span>{this.state.githubData.followers}</p>
                <p><span className="key">Following : </span>{this.state.githubData.following}</p>
                <p><span className="key">Public repos : </span>{this.state.githubData.public_repos}</p>
                <ul>
                  {/*<li>{this.state.githubRepoData.0.name}</li>*/}
                </ul>
              </div>
            </div>
            <div className="content">
              <h2 className="subtitle">Profil personnel</h2>
              <p>{firstName}  {lastName}</p>
              <p>{username}</p>
              <p>{email}</p>
              <p>{this.state.birthdate}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}
