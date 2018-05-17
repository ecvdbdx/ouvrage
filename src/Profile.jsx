import React from 'react';

const EditBtn = props => (<button onClick={props.handleClick}>Modifier</button>);

export default class Profile extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      edit: false
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

  render () {
    if (this.state.edit) {
      return (
        <div>
          <EditBtn handleClick={this.handleUpdating} />
          <h1>Profile</h1>
          <div className="avatar">
            <img src={this.props.student.avatar} alt="avatar"/>
          </div>
          <div className="content">
            <div>
              <label>Prénom</label>
              <input type="text" id="first_name" name="first_name" value={this.props.student.first_name} onChange={this.handleChange} />
            </div>

            <div>
              <label>Nom de famille</label>
              <input type="text" id="last_name" name="last_name" value={this.props.student.last_name} onChange={this.handleChange} />
            </div>

            <div>
              <label>Adresse e-mail</label>
              <input type="email" id="email" name="email" value={this.props.student.email} onChange={this.handleChange} />
            </div>

            <div>
              <label>Date de naissance</label>
              <input type="date" id="birthdate" name="birthdate" value={this.props.student.birthdate} onChange={this.handleChange} />
            </div>
          </div>

          <input type="submit" value="Submit" />
        </div>
      );
    } else {
      return (
        <div>
          <EditBtn handleClick={this.handleUpdating} />
          <h1>Profile</h1>
          <div className="avatar">
            <img src={this.props.student.avatar} alt="avatar"/>
          </div>
          <div className="content">
            <p>{this.props.student.first_name},  {this.props.student.last_name}</p>
            <p>{this.props.student.email}</p>
            <p>{this.props.student.birthdate}</p>
          </div>
        </div>
      );
    }
  }
}
