import React from 'react'
import { Link } from "../../../node_modules/react-router-dom";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
  } from "reactstrap";

const EventEdit = ({ events }) => {
  return (
    <div className="col">
      {events.map((event) => (
       
       <Card className="bg-default shadow">
         <CardHeader className="bg-transparent border-0">
           <Row className="align-items-center">
             <Col xs="8">
               <h3 className="text-white mb-0">{event.nom}</h3>
             </Col>
           </Row>
         </CardHeader>
         <CardBody>
           <Form>
             {/* Nom de l'evenement */}
             <h6 className="heading-small text-muted mb-4">
                 Nom : 
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
                       <Input placeholder="..." type="text" defaultValue={event.nom} />
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
                         <Input placeholder="Format: XX-XX-XXXX" type="text" defaultValue={event.date}/>
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
                         <Input placeholder="..." type="text" defaultValue={event.lieu} />
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
                       <Input type="file" name="file" id="eventPicture" />
                     </FormGroup>
                 </Col>
               </Row>
             </div>
             <hr className="my-4" />
             {/* bouton invitation */}
             <Button 
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
              to="../events"
              tag={Link}
              color="primary"  
              size="sm"
            >
              retour aux événements
          </Button>
         </CardBody>
       </Card> 
   
      ))}
      </div>
  )
};

export default EventEdit