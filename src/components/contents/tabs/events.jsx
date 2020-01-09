import React from "react";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";
// core components
import Header from "../../headers/header.jsx";

class Events extends React.Component {
  state = {};
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className=" mt--7" fluid>
          {/* Table */}
          <Row>
            <div className=" col">
              <Card className=" shadow">
                <CardHeader className="bg-transparent">
                  <Row>
                    <Col xs="8">
                      <h3 className="mb-0">My events</h3>
                    </Col>
                    <Col className="text-right" xs="4">
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        size="sm"
                      >
                        Add an event
                      </Button>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col lg="4" md="6">
                      <Card className="bg-default shadow">
                        <CardHeader className="bg-transparent border-0">
                          <Row className="align-items-center">
                            <Col xs="8">
                              <h4 className="text-white mb-0">Fête de la bière</h4>
                            </Col>
                            <Col className="text-right" xs="4">
                              <h6 className="text-white mb-0">10-04-2019</h6>
                            </Col>
                          </Row>
                        </CardHeader>
                        <CardBody>
                          <Card className="bg-default shadow">
                            <img
                              alt="..."
                              src={require("../../../assets/img/theme/events-card.jpg")}
                            />
                          </Card>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4" md="6">
                      <Card className="bg-default shadow">
                          <CardHeader className="bg-transparent border-0">
                            <Row className="align-items-center">
                              <Col xs="8">
                                <h4 className="text-white mb-0">Reveillon</h4>
                              </Col>
                              <Col className="text-right" xs="4">
                                <h6 className="text-white mb-0">24-09-2019</h6>
                              </Col>
                            </Row>
                          </CardHeader>
                          <CardBody>
                            <Card className="bg-default shadow">
                              <img
                                alt="..."
                                src={require("../../../assets/img/theme/events-card.jpg")}
                              />
                            </Card>
                          </CardBody>
                        </Card>
                    </Col>
                    <Col lg="4" md="6">
                      <Card className="bg-default shadow">
                          <CardHeader className="bg-transparent border-0">
                            <Row className="align-items-center">
                              <Col xs="8">
                                <h4 className="text-white mb-0">Anniversaire Didier</h4>
                              </Col>
                              <Col className="text-right" xs="4">
                                <h6 className="text-white mb-0">31-08-2019</h6>
                              </Col>
                            </Row>
                          </CardHeader>
                          <CardBody>
                            <Card className="bg-default shadow">
                              <img
                                alt="..."
                                src={require("../../../assets/img/theme/events-card.jpg")}
                              />
                            </Card>
                          </CardBody>
                        </Card>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default Events;
