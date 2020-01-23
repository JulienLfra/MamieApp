import React from 'react'

// reactstrap components
import {
  Row,
  Col,
  Container
  } from "reactstrap";

const UserProfileHeader = ({ users }) => {
  return (
    <Container className="d-flex align-items-center" fluid>
      {users.map((user) => (
        <Row>
          <Col lg="7" md="10">
            <h1 className="display-2 text-white">{"Hello " + user.prenom}</h1>
            <p className="text-white mt-0 mb-5">
              C'est votre page de profil. Vous pouvez voir toutes vos informations et les gérer ici !
            </p>
          </Col>
        </Row>
      ))}
    </Container>
  )
};

export default UserProfileHeader