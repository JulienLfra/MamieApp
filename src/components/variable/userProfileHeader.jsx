import React from 'react'

// reactstrap components
import {
  Row,
  Col,
  Container,
  Button
  } from "reactstrap";

const UserProfileHeader = ({ users }) => {
  return (
    <Container className="d-flex align-items-center" fluid>
      {users.map((user) => (
        <Row>
          <Col lg="7" md="10">
            <h1 className="display-2 text-white">{"Hello " + user.prenom}</h1>
            <p className="text-white mt-0 mb-5">
              This is your profile page. You can see all your information and manage them here !
            </p>
            <Button
              color="info"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              Edit profile
            </Button>
          </Col>
        </Row>
      ))}
    </Container>
  )
};

export default UserProfileHeader