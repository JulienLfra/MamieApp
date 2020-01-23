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
import Const from "../../../const.js";

class Management extends React.Component {

state = {
  users:[],
  mailUser: "",
  families: [],
  nameFamily:"", 
  numberFamily: 0
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
  
    fetch((Const.webpoint_list_family + this.state.mailUser).toString())
    .then(result => result.json())
    .then((data) => {
      this.setState({ families: data })
    })
    .catch(console.log)

   }, 1000);

  

 
}

hideShow = (e) =>{
 var cardAddFamily = document.getElementById('cardAddFamily');
 
  if (cardAddFamily.style.display === 'none')
    cardAddFamily.style.display = 'block';
  else
    cardAddFamily.style.display = 'none';
};

handleChange = event =>{
  this.setState({ [event.target.name]:event.target.value })
}
  
handleSubmit = event =>{
  event.preventDefault();
  console.log("Family name : " + this.state.nameFamily)
  console.log("Family number : " + this.state.numberFamily)
  const url = Const.webpoint_list_family
  const data = { nom:this.state.nameFamily, nombreMembre:this.state.numberFamily }
  
  fetch(url, { 
    method: 'POST', // or ‘PUT’
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers:{ 'Content-Type': 'application/json' } })
      .then(res => res.json())
        .catch(error => console.error('Error:', error))
          .then(response => console.log('Success:', response)); 

    setTimeout(() => { document.location.reload(true); }, 1000);
    
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
                  <Row>
                    <Col xs="8">
                      <h3 className="text-white mb-0">Mes familles</h3>
                    </Col>
                    <Col className="text-right" xs="4">
                      <Button
                        color="primary"
                        onClick={e => this.hideShow(e)}
                        size="sm"
                      >
                        Ajouter une famille
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
                      <th scope="col">Famille</th>
                      <th scope="col">Nombre</th>
                      <th scope="col">Modifier</th>
                      <th scope="col">Supprimer</th>
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
                          <h3 className="text-white mb-0">Ajouter une famille</h3>
                        </Col>
                      </Row>
                    </CardHeader>
                    <CardBody>
                      <Form onSubmit={this.handleSubmit}>
                        {/* Mettre le nom */}
                        <h6 className="heading-small text-muted mb-4">
                          Nom:
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
                                  <Input placeholder="..." type="text" name="nameFamily" onChange={this.handleChange} />
                                </InputGroup>
                              </FormGroup>
                            </Col>
                            <Col md="1">
                            {/* bouton creation */}
                              <Button 
                                type="submit"
                                value="Add a family"
                                className="float-right"
                                color="primary"
                                size="sm"
                              >
                                Créer
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