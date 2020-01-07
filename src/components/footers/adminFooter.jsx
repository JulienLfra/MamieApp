/*eslint-disable*/
import React from "../../../node_modules/react";

// reactstrap components
import { Container, Row, Col, Nav, NavItem, NavLink } from "../../../node_modules/reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Row className="align-items-center justify-content-xl-between">
          <Col xl="6">
            <div className="copyright text-center text-xl-left text-muted">
              © 2020{" "}
              <a
                className="font-weight-bold ml-1"
                href="https://media2.giphy.com/media/3rgXBQIDHkFNniTNRu/giphy.gif?cid=790b761127e690b5d0ac10ec75d978eb1a7c599fb9d8ca2d&rid=giphy.gif"
                rel="noopener noreferrer"
                target="_blank"
              >
                Mamie Inc.
              </a>
            </div>
          </Col>

          <Col xl="6">
            <Nav className="nav-footer justify-content-center justify-content-xl-end">
              <NavItem>
                <NavLink
                  href="https://media3.giphy.com/media/NN6FcdirnkygE/giphy.gif?cid=790b76113ea81d93c4cb6c41697b8d57fc44444a11aea57d&rid=giphy.gif"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Toute reproduction est interdite
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </footer>
    );
  }
}

export default Footer;
