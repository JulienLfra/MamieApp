import React from "react";

// core components
import UserHeader from "../../headers/profileHeader.jsx";
import User from "../../variable/user.jsx";
import Const from "../../../const.js";

class Profile extends React.Component {

  state = {
    users: []
  }
  
  componentDidMount() {
    fetch(Const.webpoint_user)
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
