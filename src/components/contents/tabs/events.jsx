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
import Const from "../../../const.js";

class Events extends React.Component {
  
  state = {
    users: [],
    mailUser: "",
    events: []
  }
  
  componentDidMount() {
    
    fetch(Const.webpoint_user)
    .then(result => result.json())
    .then((data) => {
      this.setState({ users: data })
      this.setState({ mailUser: this.state.users[0].mail})
    })
    .catch(console.log)

    setTimeout(() => {

      fetch((Const.webpoint_list_event + this.state.mailUser).toString())
      .then(result => result.json())
      .then((data) => {
        this.setState({ events: data })
      })
      .catch(console.log)

    }, 1000);

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
                      <h3 className="mb-0">Mes événements</h3>
                    </Col>
                    <Col className="text-right" xs="4">
                      <Button
                        color="primary"
                        to="../admin/events-add-event"
                        tag={Link}
                        size="sm"
                      >
                        Ajouter un événement
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
