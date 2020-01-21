import React from "react";

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
  Container,
  Row,
  Col,
  Table 
} from "reactstrap";
// core components
import Header from "../../headers/header.jsx";
import Family from "../../variable/family.jsx";

class Management extends React.Component {

state = {
  families: []
}

componentDidMount() {
  fetch('http://192.168.43.228:5000/familles')
  .then(result => result.json())
  .then((data) => {
    this.setState({ families: data })
  })
  .catch(console.log)
}

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
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                    <Family families={this.state.families}></Family>
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