import React from "react";
import { Link } from "../../../../node_modules/react-router-dom";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Media,
  Table,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
// core components
import Header from "../../headers/header.jsx";

class Management extends React.Component {

hideShow = (e) =>{
 var cardAddFamily = document.getElementById('cardAddFamily');
 
  if (cardAddFamily.style.display === 'none')
    cardAddFamily.style.display = 'block';
  else
    cardAddFamily.style.display = 'none';
};

  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
          <Row className="mt-5">
            <div className="col">
              <Card className="bg-default shadow">
                <CardHeader className="bg-transparent border-0">
                  <Row>
                    <Col xs="8">
                      <h3 className="text-white mb-0">My families</h3>
                    </Col>
                    <Col className="text-right" xs="4">
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={e => this.hideShow(e)}
                        size="sm"
                      >
                        Add a family
                      </Button>
                    </Col>
                  </Row>
                </CardHeader>
                <Table
                  className="align-items-center table-dark table-flush"
                  responsive
                >
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Family</th>
                      <th scope="col">Number</th>
                      <th scope="col">Members</th>
                      <th scope="col">Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <span
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
                          >
                            <img
                              alt="..."
                              src={require("../../../assets/img/theme/icon-family.png")}
                            />
                          </span>
                          <Media>
                            <span className="mb-0 text-sm">
                              Bozon
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>
                        <p>10</p>
                      </td>
                      <td>
                        <div className="avatar-group">
                          <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip731399078"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              src={require("../../../assets/img/theme/member1.jpg")}
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip731399078"
                          >
                            Ryan Bozon
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip491083084"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              src={require("../../../assets/img/theme/member2.jpg")}
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip491083084"
                          >
                            Nina Ugnon
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip528540780"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              src={require("../../../assets/img/theme/member3.jpg")}
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip528540780"
                          >
                            Alexandra Bozon
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip237898869"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              src={require("../../../assets/img/theme/member4.jpg")}
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip237898869"
                          >
                            Sophie Ugnon
                          </UncontrolledTooltip>
                        </div>
                      </td>
                      <td className="align-items-center">
                        <Button
                          to="../admin/management-edit-family"
                          tag={Link}
                          color="primary"
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("../../../assets/img/theme/icon-edit.png")}
                          />
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <span
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
                          >
                            <img
                              alt="..."
                              src={require("../../../assets/img/theme/icon-family.png")}
                            />
                          </span>
                          <Media>
                            <span className="mb-0 text-sm">
                              Ugnon
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>
                        <p>15</p>
                      </td>
                      <td>
                        <div className="avatar-group">
                          <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip188614932"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              src={require("../../../assets/img/theme/member1.jpg")}
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip188614932"
                          >
                            Ryan Ugnon
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip66535734"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              src={require("../../../assets/img/theme/member2.jpg")}
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip66535734"
                          >
                            Romina Bozon
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip427561578"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              src={require("../../../assets/img/theme/member3.jpg")}
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip427561578"
                          >
                            Alexandrie Ugnon
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip904098289"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              src={require("../../../assets/img/theme/member4.jpg")}
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip904098289"
                          >
                            Jessica Bozon
                          </UncontrolledTooltip>
                        </div>
                      </td>
                      <td className="align-items-center">
                        <Button
                           to="../admin/management-edit-family"
                           tag={Link}
                           color="primary"
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("../../../assets/img/theme/icon-edit.png")}
                          />
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </div>
          </Row>
          <Row className="mt-5">
                <div className="col" id="cardAddFamily" style={{display:"none"}}>
                  <Card className="bg-default shadow">
                    <CardHeader className="bg-transparent border-0">
                      <Row className="align-items-center">
                        <Col xs="8">
                          <h3 className="text-white mb-0">Add a family</h3>
                        </Col>
                      </Row>
                    </CardHeader>
                    <CardBody>
                      <Form>
                        {/* Mettre le nom */}
                        <h6 className="heading-small text-muted mb-4">
                          Name:
                        </h6>
                        <div className="pl-lg-4">
                          <Row>
                            <Col md="3">
                              <FormGroup className="mb-0">
                                <InputGroup className="input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input placeholder="..." type="text" />
                                </InputGroup>
                              </FormGroup>
                            </Col>
                            <Col md="1">
                            {/* bouton creation */}
                              <Button 
                                className="float-right"
                                color="primary"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                                size="sm"
                              >
                                Create
                              </Button>
                              </Col>
                          </Row>
                        </div>
                      </Form>
                    </CardBody>
                  </Card> 
              </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default Management;