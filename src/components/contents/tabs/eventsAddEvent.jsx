import React from "react";
import { Link } from "../../../../node_modules/react-router-dom";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardHeader,
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

class EventsAddEvent extends React.Component {

  state = {
    nameEvent:"", 
    dateEvent: "",
    lieuEvent:"",
    picEvent:null
  }

  handleChange = event =>{
    this.setState({ [event.target.name]:event.target.value })
  }
    
  handleSubmit = event =>{
    event.preventDefault();
    console.log("Event name : " + this.state.nameEvent)
    console.log("Event date : " + this.state.dateEvent)
    console.log("Event lieu : " + this.state.lieuEvent)
    console.log("Event picture : " + this.state.picEvent)
    const url ="http://35.180.28.149:5000//evenement"
    const data = { nom:this.state.nameEvent, date:this.state.dateEvent, lieu:this.state.lieuEvent, photo:this.state.picEvent }
    
    fetch(url, { 
      method: 'POST', // or ‘PUT’
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{ 'Content-Type': 'application/json' } })
        .then(res => res.json())
          .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response)); 
  
      //setTimeout(() => { document.location.reload(true); }, 1000);
      
  }

  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
        <Row className="mt-5">
                <div className="col">
                  <Card className="bg-default shadow">
                    <CardHeader className="bg-transparent border-0">
                      <Row className="align-items-center">
                        <Col xs="8">
                          <h3 className="text-white mb-0">Ajouter un événement</h3>
                        </Col>
                      </Row>
                    </CardHeader>
                    <CardBody>
                      <Form onSubmit={this.handleSubmit}>
                        {/* Nom de l'evenement */}
                        <h6 className="heading-small text-muted mb-4">
                            Nom:
                        </h6>
                        <div className="pl-lg-4">
                          <Row>
                            <Col md="12">
                              <FormGroup className="mb-0">
                                <InputGroup className="input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input placeholder="..." type="text" name="nameEvent" onChange={this.handleChange} />
                                </InputGroup>
                              </FormGroup>
                            </Col>
                          </Row>
                        </div>
                        <hr className="my-4" />
                        {/* Date de l'evenement */}
                        <h6 className="heading-small text-muted mb-4">
                          Date : 
                        </h6>
                        <div className="pl-lg-4">
                          <Row>
                            <Col md="12">
                              <FormGroup className="mb-0">
                                  <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                      <InputGroupText>
                                      </InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="Format: XX-XX-XXXX" type="text" name="dateEvent" onChange={this.handleChange} />
                                  </InputGroup>
                                </FormGroup>
                            </Col>
                          </Row>
                        </div>
                        <hr className="my-4" />
                        {/* Lieu de l'evenement */}
                        <h6 className="heading-small text-muted mb-4">
                          Lieu : 
                        </h6>
                        <div className="pl-lg-4">
                          <Row>
                            <Col md="12">
                              <FormGroup className="mb-0">
                                  <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                      <InputGroupText>
                                      </InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="..." type="text" name="lieuEvent" onChange={this.handleChange} />
                                  </InputGroup>
                                </FormGroup>
                            </Col>
                          </Row>
                        </div>
                        <hr className="my-4" />
                        {/* Photo de l'evenement */}
                        <h6 className="heading-small text-muted mb-4">
                          Photo : 
                        </h6>
                        <div className="pl-lg-4">
                          <Row>
                            <Col md="12">
                              <FormGroup className="mb-0">
                                  <Input type="file" name="picEvent" onChange={this.handleChange} />
                                </FormGroup>
                            </Col>
                          </Row>
                        </div>
                        <hr className="my-4" />
                        {/* bouton invitation */}
                        <Button 
                          type="submit"
                          value="Add an event"
                          className="float-right"
                          color="primary"
                          size="sm"
                        >
                          Créer un événement
                        </Button>
                      </Form>
                      {/* bouton back */}
                      <Button 
                          className="float-left"
                          to="../admin/events"
                          tag={Link}
                          color="primary"
                          href="#pablo"     
                          size="sm"
                        >
                          retour aux événements
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

export default EventsAddEvent;