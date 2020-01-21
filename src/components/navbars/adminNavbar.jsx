import React from "../../../node_modules/react";

// reactstrap components
import {
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Container,
} from "../../../node_modules/reactstrap";

import UserNav from "../variable/userNav.jsx";

class AdminNavbar extends React.Component {

  state = {
    users: []
  }
  
  componentDidMount() {
    fetch('http://192.168.43.228:5000/personne?nom=Plaideau&prenom=Guillaume')
    .then(result => result.json())
    .then((data) => {
      this.setState({ users: data })
    })
    .catch(console.log)
  }

  render() {
    console.log(this.state.users);
    return (
      <>
        <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
          <Container fluid>
            <p className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" to="/">
              {this.props.brandText}
            </p>
            <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
              <FormGroup className="mb-0">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fas fa-search" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Search" type="text" />
                </InputGroup>
              </FormGroup>
            </Form>
            <UserNav users={this.state.users}></UserNav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default AdminNavbar;
