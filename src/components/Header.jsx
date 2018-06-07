import React from 'react';

export default class Header extends React.Component {
  render () {
    return (<header>
      <h1>Ouvrage - ECV Digital Bordeaux
      </h1>
      <p>
        {this.props.title}
      </p>
    </header>);
  }
}
