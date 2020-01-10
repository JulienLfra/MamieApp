import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Media,
  Table,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";
// core components
import Header from "../../headers/header.jsx";

class ManagementEditFamily extends React.Component {
 
  state = {
    contacts: []
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)
  }
  
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
                  <h3 className="text-white mb-0">...family</h3>
                </CardHeader>
                <Table
                  className="align-items-center table-dark table-flush"
                  responsive
                >
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Age</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={require("../../../assets/img/theme/member1.jpg")}
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                              Alexandra Bozon
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>
                        <p>{this.state.contacts[0].age}</p>
                      </td>
                      <td className="align-items-center">
                        <Button
                          color="gray dark"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("../../../assets/img/theme/icon-delete.png")}
                          />
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={require("../../../assets/img/theme/member2.jpg")}
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                              Nicolas Bozon
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>
                        <p>20 ans</p>
                      </td>
                      <td className="align-items-center">
                        <Button
                          color="gray dark"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("../../../assets/img/theme/icon-delete.png")}
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
                <div className="col">
                  <Card className="bg-default shadow">
                    <CardHeader className="bg-transparent border-0">
                      <Row className="align-items-center">
                        <Col xs="8">
                          <h3 className="text-white mb-0">Add members</h3>
                        </Col>
                      </Row>
                    </CardHeader>
                    <CardBody>
                      <Form>
                        {/* recherche par nom */}
                        <h6 className="heading-small text-muted mb-4">
                          By name:
                        </h6>
                        <div className="pl-lg-4">
                          <Row>
                            <Col md="12">
                              <FormGroup className="mb-0">
                                <InputGroup className="input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="fas fa-search" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input placeholder="Search..." type="text" />
                                </InputGroup>
                              </FormGroup>
                            </Col>
                          </Row>
                        </div>
                        <hr className="my-4" />
                        {/* recherche par mail */}
                        <h6 className="heading-small text-muted mb-4">
                          By e-mail:
                        </h6>
                        <div className="pl-lg-4">
                          <Row>
                            <Col md="12">
                              <FormGroup className="mb-0">
                                  <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                      <InputGroupText>
                                        <i className="fas fa-search" />
                                      </InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="Search..." type="text" />
                                  </InputGroup>
                                </FormGroup>
                            </Col>
                          </Row>
                        </div>
                        <hr className="my-4" />
                        {/* bouton invitation */}
                        <Button 
                          className="float-right"
                          color="primary"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          size="sm"
                        >
                          Send invitation
                        </Button>
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

export default ManagementEditFamily;