import React from "react";

import UserProfileHeader from "../variable/userProfileHeader.jsx";

class ProfileHeader extends React.Component {

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
        <div
          className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
          style={{
            minHeight: "600px",
            backgroundImage:
              "url(" + require("../../assets/img/theme/profile-cover.jpg") + ")",
            backgroundSize: "cover",
            backgroundPosition: "center top"
          }}
        >
          {/* Mask */}
          <span className="mask bg-gradient-default opacity-8" />
            <UserProfileHeader users={this.state.users}></UserProfileHeader>
        </div>
      </>
    );
  }
}

export default ProfileHeader;
