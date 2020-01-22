import React from "react";

// core components
import UserHeader from "../../headers/profileHeader.jsx";
import User from "../../variable/user.jsx";

class Profile extends React.Component {

  state = {
    users: []
  }
  
  componentDidMount() {
    fetch('http://35.180.28.149:5000/personne?nom=Plaideau&prenom=Guillaume')
    .then(result => result.json())
    .then((data) => {
      this.setState({ users: data })
    })
    .catch(console.log)
  }
  
  render() {
    return (
      <>
        <UserHeader />
        {/* Page content */}
        <User users={this.state.users}></User>
      </>
    );
  }
}

export default Profile;
