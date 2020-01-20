import React from "react";

// reactstrap components
import {
  Container,
  Row,
} from "reactstrap";
// core components
import Header from "../../headers/header.jsx";
import EventEdit from "../../user/eventEdit.jsx"

class EventsEditEvent extends React.Component {

  state = {
    events: []
  }

  componentDidMount() {

    const { event_id } = this.props.match.params

    fetch(`http://benjamin.molinet.free.fr/projetMamie/getFamilyById${event_id}.php`)
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
        <Container className="mt--7" fluid>
        <Row className="mt-5">
               <EventEdit events={this.state.events}></EventEdit>
          </Row>
        </Container>
      </>
    );
  }
}

export default EventsEditEvent;