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
                  <Row className="align-items-center">
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
                  <Row className=" icon-examples">
                    <Col lg="3" md="6">
                        <button
                          className=" btn-icon-clipboard"
                          id="tooltip982655500"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-square-pin text-red" />
                            <span>Fête de la bière</span>
                          </div>
                        </button>
                    </Col>
                    <Col lg="3" md="6">
                        <button
                          className=" btn-icon-clipboard"
                          data-clipboard-text="air-baloon"
                          id="tooltip47550434"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-square-pin text-red" />
                            <span>Noel</span>
                          </div>
                        </button>
                    </Col>
                    <Col lg="3" md="6">
                        <button
                          className=" btn-icon-clipboard"
                          data-clipboard-text="album-2"
                          id="tooltip945481346"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-square-pin text-red" />
                            <span>Jour de l'an</span>
                          </div>
                        </button>
                    </Col>
                    <Col lg="3" md="6">
                        <button
                          className=" btn-icon-clipboard"
                          data-clipboard-text="align-center"
                          id="tooltip662352101"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-square-pin text-red" />
                            <span>Fête des lumières</span>
                          </div>
                        </button>
                    </Col>
                    <Col lg="3" md="6">
                        <button
                          className=" btn-icon-clipboard"
                          data-clipboard-text="align-left-2"
                          id="tooltip125499785"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-square-pin text-red" />
                            <span>Vacance</span>
                          </div>
                        </button>
                    </Col>
                    <Col lg="3" md="6">
                        <button
                          className=" btn-icon-clipboard"
                          data-clipboard-text="ambulance"
                          id="tooltip382136785"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-square-pin text-red" />
                            <span>Anniversaire Didier</span>
                          </div>
                        </button>
                    </Col>
                    <Col lg="3" md="6">
                        <button
                          className=" btn-icon-clipboard"
                          data-clipboard-text="app"
                          id="tooltip3354607"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-square-pin text-red" />
                            <span>Cousinade</span>
                          </div>
                        </button>
                    </Col>
                    <Col lg="3" md="6">
                        <button
                          className=" btn-icon-clipboard"
                          data-clipboard-text="archive-2"
                          id="tooltip949558633"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-square-pin text-red" />
                            <span>Fête de Sylvain</span>
                          </div>
                        </button>
                    </Col>
                    <Col lg="3" md="6">
                        <button
                          className=" btn-icon-clipboard"
                          data-clipboard-text="atom"
                          id="tooltip742747005"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-square-pin text-red" />
                            <span>Tennis</span>
                          </div>
                        </button>
                    </Col>
                    <Col lg="3" md="6">
                        <button
                          className=" btn-icon-clipboard"
                          data-clipboard-text="badge"
                          id="tooltip488565068"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-square-pin text-red" />
                            <span>Randonnée</span>
                          </div>
                        </button>
                    </Col>
                    <Col lg="3" md="6">
                        <button
                          className=" btn-icon-clipboard"
                          data-clipboard-text="bag-17"
                          id="tooltip163626790"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-square-pin text-red" />
                            <span>Soirée</span>
                          </div>
                        </button>
                    </Col>
                    <Col lg="3" md="6">
                        <button
                          className=" btn-icon-clipboard"
                          data-clipboard-text="basket"
                          id="tooltip387253692"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-square-pin text-red" />
                            <span>Reveillon</span>
                          </div>
                        </button>
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
