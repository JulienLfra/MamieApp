import React from "react";
import { Link } from "../../../../node_modules/react-router-dom";

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
import Event from "../../variable/event.jsx";

class Events extends React.Component {
  
  state = {
    events: []
  }
  
  componentDidMount() {
    fetch('http://demo.gefigram.net/QM/www/missions.php?employe=2&etat=0')
    .then(result => result.json())
    .then((data) => {
      this.setState({ events: data })
    })
    .catch(console.log)
  }

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
                        to="../admin/events-add-event"
                        tag={Link}
                        size="sm"
                      >
                        Add an event
                      </Button>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Row>
                      <Event events={this.state.events}></Event>
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
