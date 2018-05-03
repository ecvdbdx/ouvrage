import React from 'react';

export default class Profile extends React.Component {
  constructor (props) {
    super(props);
  }

  // componentDidMount() {
  //   // fetch("https://rawgit.com/DavidBruant/contenu-formations-web/master/js/data/tweets.json")
  //   //     .then((tweets) => {
  //   //         this.setState({
  //   //             allTweets: tweets,
  //   //             tweetsToDisplay: tweets,
  //   //         });
  //   //})
  // }


  render () {
    return (
      <div>
        <h1>Profile</h1>
        <img src="http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png" alt="avatar"/>
        <p>Nom, prénom</p>
        <p>email@email.fr</p>
        <p>Anniversaire</p>
      </div>
    );
  }
}
