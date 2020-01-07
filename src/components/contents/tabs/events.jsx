import React from "react";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  UncontrolledTooltip
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
                <CardHeader className=" bg-transparent">
                  <h3 className=" mb-0">Events</h3>
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
                      
                      <UncontrolledTooltip
                        delay={0}
                        trigger="hover focus"
                        target="tooltip982655500"
                      >
                        {this.state.copiedText === "active-40"
                          ? "Copied"
                          : "Copy To Clipboard"}
                      </UncontrolledTooltip>
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
                      
                      <UncontrolledTooltip
                        delay={0}
                        trigger="hover focus"
                        target="tooltip47550434"
                      >
                        {this.state.copiedText === "air-baloon"
                          ? "Copied"
                          : "Copy To Clipbord"}
                      </UncontrolledTooltip>
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
                      
                      <UncontrolledTooltip
                        delay={0}
                        trigger="hover focus"
                        target="tooltip945481346"
                      >
                        {this.state.copiedText === "album-2"
                          ? "Copied"
                          : "Copy To Clipbord"}
                      </UncontrolledTooltip>
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
                      
                      <UncontrolledTooltip
                        delay={0}
                        trigger="hover focus"
                        target="tooltip662352101"
                      >
                        {this.state.copiedText === "align-center"
                          ? "Copied"
                          : "Copy To Clipbord"}
                      </UncontrolledTooltip>
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
                      
                      <UncontrolledTooltip
                        delay={0}
                        trigger="hover focus"
                        target="tooltip125499785"
                      >
                        {this.state.copiedText === "align-left-2"
                          ? "Copied"
                          : "Copy To Clipbord"}
                      </UncontrolledTooltip>
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
                      
                      <UncontrolledTooltip
                        delay={0}
                        trigger="hover focus"
                        target="tooltip382136785"
                      >
                        {this.state.copiedText === "ambulance"
                          ? "Copied"
                          : "Copy To Clipbord"}
                      </UncontrolledTooltip>
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
                      
                      <UncontrolledTooltip
                        delay={0}
                        trigger="hover focus"
                        target="tooltip3354607"
                      >
                        {this.state.copiedText === "app"
                          ? "Copied"
                          : "Copy To Clipbord"}
                      </UncontrolledTooltip>
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
                      
                      <UncontrolledTooltip
                        delay={0}
                        trigger="hover focus"
                        target="tooltip949558633"
                      >
                        {this.state.copiedText === "archive-2"
                          ? "Copied"
                          : "Copy To Clipbord"}
                      </UncontrolledTooltip>
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
                      
                      <UncontrolledTooltip
                        delay={0}
                        trigger="hover focus"
                        target="tooltip742747005"
                      >
                        {this.state.copiedText === "atom"
                          ? "Copied"
                          : "Copy To Clipbord"}
                      </UncontrolledTooltip>
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
                      
                      <UncontrolledTooltip
                        delay={0}
                        trigger="hover focus"
                        target="tooltip488565068"
                      >
                        {this.state.copiedText === "badge"
                          ? "Copied"
                          : "Copy To Clipbord"}
                      </UncontrolledTooltip>
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
                      
                      <UncontrolledTooltip
                        delay={0}
                        trigger="hover focus"
                        target="tooltip163626790"
                      >
                        {this.state.copiedText === "bag-17"
                          ? "Copied"
                          : "Copy To Clipbord"}
                      </UncontrolledTooltip>
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
                      
                      <UncontrolledTooltip
                        delay={0}
                        trigger="hover focus"
                        target="tooltip387253692"
                      >
                        {this.state.copiedText === "basket"
                          ? "Copied"
                          : "Copy To Clipbord"}
                      </UncontrolledTooltip>
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
