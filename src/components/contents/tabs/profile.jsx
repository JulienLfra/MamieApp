import React from "react";

// core components
import UserHeader from "../../headers/profileHeader.jsx";
import User from "../../user/user.jsx";

class Profile extends React.Component {

  state = {
    users: []
  }
  
  componentDidMount() {
    fetch('http://demo.gefigram.net/QM/www/clients.php?id_client=102')
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
