import React from 'react'

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Input,
  Container,
  Row,
  Col
  } from "reactstrap";

const User = ({ users }) => {
  return (
    <Container className="mt--7" fluid>
      {users.map((user) => (
      <Row>
        <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
        <Card className="card-profile shadow">
          <Row className="justify-content-center">
            <Col className="order-lg-2" lg="3">
              <div className="card-profile-image">
                  <img
                    alt="..."
                    className="rounded-circle"
                    src={user.photo}
                  />
              </div>
            </Col>
          </Row>
          <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"></CardHeader>
          <CardBody className="pt-0 pt-md-4">
            <Row>
              <div className="col">
                <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                  <div>
                    <span className="heading">0</span>
                    <span className="description">Photos</span>
                  </div>
                </div>
              </div>
            </Row>
            <div className="text-center">
              <h3>
                {user.prenom + " " + user.nom}
                <span className="font-weight-light">, {user.age}</span>
              </h3>
              <div className="h5 font-weight-300">
                <i className="ni location_pin mr-2" />
                {user.ville}, {user.pays}
              </div>
              <div className="h5 mt-4">
                <i className="ni business_briefcase-24 mr-2" />
                {user.profession}
              </div>
              <div>
                <i className="ni education_hat mr-2" />
                {user.diplome}
              </div>
              <hr className="my-4" />
              <p>
                {user.statut}
              </p>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col className="order-xl-1" xl="8">
        <Card className="bg-secondary shadow">
          <CardHeader className="bg-white border-0">
            <Row className="align-items-center">
              <Col xs="8">
                <h3 className="mb-0">Mon compte</h3>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <Form>
              <h6 className="heading-small text-muted mb-4">
                Information de l'utilisateur
              </h6>
              <div className="pl-lg-4">
                <Row>
                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-username"
                      >
                        Pseudo
                      </label>
                      <Input
                        className="form-control-alternative"
                        defaultValue=""
                        id="input-username"
                        placeholder="pseudo"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-email"
                      >
                        Adresse mail
                      </label>
                      <Input
                        className="form-control-alternative"
                        id="input-email"
                        defaultValue={user.mail}
                        placeholder="mail"
                        type="email"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-first-name"
                      >
                        Prénom
                      </label>
                      <Input
                        className="form-control-alternative"
                        defaultValue={user.prenom}
                        id="input-first-name"
                        placeholder="Prénom"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-last-name"
                      >
                        Nom
                      </label>
                      <Input
                        className="form-control-alternative"
                        defaultValue={user.nom}
                        id="input-last-name"
                        placeholder="Nom"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </div>
              <hr className="my-4" />
              {/* Address */}
              <h6 className="heading-small text-muted mb-4">
                Information de contact
              </h6>
              <div className="pl-lg-4">
                <Row>
                  <Col md="12">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-address"
                      >
                        Adresse
                      </label>
                      <Input
                        className="form-control-alternative"
                        defaultValue=""
                        id="input-address"
                        placeholder="Adresse"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg="4">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-city"
                      >
                        Ville
                      </label>
                      <Input
                        className="form-control-alternative"
                        defaultValue={user.ville}
                        id="input-city"
                        placeholder="Ville"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="4">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-country"
                   adresse_client   >
                        Pays
                      </label>
                      <Input
                        className="form-control-alternative"
                        defaultValue={user.pays}
                        id="input-country"
                        placeholder="Pays"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="4">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-country"
                      >
                        Code postal
                      </label>
                      <Input
                        className="form-control-alternative"
                        id="input-postal-code"
                        placeholder="Code postal"
                        type="number"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </div>
              <hr className="my-4" />
              {/* Description */}
              <h6 className="heading-small text-muted mb-4">A propos de moi</h6>
              <div className="pl-lg-4">
                <FormGroup>
                  <label>A propos de moi</label>
                  <Input
                    className="form-control-alternative"
                    placeholder="Quelques mots à propos de vous ..."
                    rows="4"
                    defaultValue={user.statut}
                    type="textarea"
                  />
                </FormGroup>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
      ))}
  </Container>
  )
};

export default User