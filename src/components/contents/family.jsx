import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
} from "reactstrap";

import Header from "../headers/header.jsx";

class Family extends React.Component {
  
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
              <Card className="bg-gradient-default shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h6 className="text-uppercase text-light ls-1 mb-1">
                        Arbre généalogique
                      </h6>
                      <h2 className="text-white mb-0">Famille</h2>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  <div className="chart">
                    {/* TODO : Arbre généalogique*/}
                  </div>
                </CardBody>
              </Card>
        </Container>
      </>
    );
  }
}

export default Family;