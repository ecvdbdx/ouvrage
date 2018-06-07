import React from 'react';
import Joi from 'joi';
import base from '../../airtable/config.js';

const schema = {
  firstName: Joi.string().required(),
  username: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  birthdate: Joi.string().isoDate(),
  avatar: Joi.string()
};

export default class CreateProfil extends React.Component {
  constructor () {
    super();

    this.state = {
      firstName: '',
      username: '',
      lastName: '',
      email: '',
      birthdate: '',
      avatar: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
    this.submit = this.submit.bind(this);
  }

  validate () {
    return Joi.validate(this.state, schema);
  }

  handleChange (event, field) {
    this.setState({
      [field]: event.target.value
    });
  }

  submit () {
    this.validate()
      .then((value) => {
        console.log(value);

        base('Profil').create({
          firstName: value.firstName,
          lastName: value.lastName,
          username: value.username,
          email: value.email,
          birthdate: value.birthdate,
          avatar: value.avatar
        }, function (err) {
          if (err) {
            console.error(err);
          }
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render () {
    const { firstName, username, lastName, email, birthdate, avatar } = this.state;

    return (
      <div>
        <form>
          <input name="first_name" type="text" placeholder="Firstname"
            value={firstName}
            onChange={e => this.handleChange(e, 'firstName')}
          />
          <input name="username" type="text" placeholder="Username"
            value={username}
            onChange={e => this.handleChange(e, 'username')}
          />
          <input name="last_name" type="text" placeholder="Lastname"
            value={lastName}
            onChange={e => this.handleChange(e, 'lastName')}
          />
          <input name="email" type="email" placeholder="Email"
            value={email}
            onChange={e => this.handleChange(e, 'email')}
          />
          <input name="birthdate" type="date" placeholder="Birthdate"
            value={birthdate}
            onChange={e => this.handleChange(e, 'birthdate')}
          />
          <input name="avatar" type="file"
            value={avatar}
            onChange={e => this.handleChange(e, 'avatar')}
          />
        </form>

        <button onClick={this.submit} >Add profil</button>
      </div>
    );
  }
}
