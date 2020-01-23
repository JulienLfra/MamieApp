import React from "../../../node_modules/react";

// reactstrap components
import {
  Navbar,
  Container,
} from "../../../node_modules/reactstrap";

import UserNav from "../variable/userNav.jsx";
import Const from "../../const.js";

class AdminNavbar extends React.Component {

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
        <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
          <Container fluid>
            <p className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" to="/">
              {this.props.brandText}
            </p>
            <UserNav users={this.state.users}></UserNav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default AdminNavbar;
