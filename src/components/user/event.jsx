import React from 'react'

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col
  } from "reactstrap";

const Event = ({ events }) => {
  return (
    <Row>
      {events.map((event) => (
        <Col lg="4" md="6">
        <Card className="bg-default shadow">
        <CardHeader className="bg-transparent border-0">
          <Row className="align-items-center">
            <Col xs="8">
              <h4 className="text-white mb-0">{event.nom_mission}</h4>
            </Col>
            <Col className="text-right" xs="4">
              <h6 className="text-white mb-0">{event.date_mission}</h6>
            </Col>
          </Row>
        </CardHeader>
        <CardBody>
          <Card className="bg-default shadow">
            <img
              alt="..."
              src={require("../../assets/img/theme/events-card.jpg")}
            />
          </Card>
        </CardBody>
      </Card>
      </Col>
      ))}
    </Row>
  )
};

export default Event