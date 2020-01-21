import React from "react";
import { Link } from "../../../../node_modules/react-router-dom";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardHeader,
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
import Member from "../../variable/member.jsx"

class ManagementEditFamily extends React.Component {
 
  state = {
    members: []
  }

  componentDidMount() {

    const { family_id } = this.props.match.params

    fetch(`http://benjamin.molinet.free.fr/projetMamie/getUsersByFamily${family_id}.php`)
    .then(result => result.json())
    .then((data) => {
      this.setState({ members: data })
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
                  <h3 className="text-white mb-0">Members</h3>
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
                  <Member members={this.state.members}></Member>
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
                      <Button 
                          className="float-left"
                          to="../management"
                          tag={Link}
                          color="primary"
                          href="#pablo"     
                          size="sm"
                        >
                          back to families
                      </Button>
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