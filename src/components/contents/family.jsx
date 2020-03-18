import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
} from "reactstrap";
import ReactFamilyTree from 'react-family-tree';
import FamilyNode from "./tabs/FamilyNode";

import Header from "../headers/header.jsx";
import Const from "../../const";

class Family extends React.Component {


    state = {
        nodes: []
    }

    componentDidMount() {

        fetch((Const.webpoint_genealogie).toString())
            .then(result => result.json())
            .then((data) => {
                this.setState({ nodes: data })
            })
            .catch(console.log)
    }


  render() {

      const myID = '4416';

      const WIDTH = 100;
      const HEIGHT = 100;
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
                      <ReactFamilyTree

                          nodes = {[
                              {
                                  "id": "4416",
                                  "gender": "male",
                                  "name": "Guillaume Plaideau",
                                  "parents": [
                                      {
                                          "id": "4415"
                                      },
                                      {
                                          "id": "4417"
                                      }
                                  ],
                                  "siblings": [
                                      {
                                          "id": "3891"
                                      }
                                  ],
                                  "spouses": [
                                      {
                                          "id": "3892"
                                      }
                                  ],
                                  "children": []
                              },
                              {
                                  "id": "4415",
                                  "gender": "female",
                                  "name": "Murielle Plaideau",
                                  "parents": [],
                                  "siblings": [],
                                  "spouses": [
                                      {
                                          "id": "4417"
                                      }
                                  ],
                                  "children": [
                                      {
                                          "id": "3891"
                                      },
                                      {
                                          "id": "4416"
                                      }
                                  ]
                              },
                              {
                                  "id": "4417",
                                  "gender": "male",
                                  "name": "Alain Plaideau",
                                  "parents": [],
                                  "siblings": [],
                                  "spouses": [
                                      {
                                          "id": "4415"
                                      }
                                  ],
                                  "children": [
                                      {
                                          "id": "3891"
                                      },
                                      {
                                          "id": "4416"
                                      }
                                  ]
                              },
                              {
                                  "id": "3891",
                                  "gender": "female",
                                  "name": "Eleonore Plaideau",
                                  "parents": [
                                      {
                                          "id": "4415"
                                      },
                                      {
                                          "id": "4417"
                                      }
                                  ],
                                  "siblings": [
                                      {
                                          "id": "4416"
                                      }
                                  ],
                                  "spouses": [],
                                  "children": []
                              },
                              {
                                  "id": "3892",
                                  "gender": "female",
                                  "name": "Stella des Sources",
                                  "parents": [],
                                  "siblings": [],
                                  "spouses": [
                                      {
                                          "id": "4416"
                                      }
                                  ],
                                  "children": []
                              }
                          ]}

                          rootId={myID}
                          width={WIDTH}
                          height={HEIGHT}
                          renderNode={(node) => (
                              <FamilyNode
                                  key={node.id}
                                  node={node}
                                  isRoot={node.id === {myID}}
                                  style={{
                                      width: WIDTH,
                                      height: HEIGHT,
                                      transform: `translate(${node.left * (WIDTH / 2)}px, ${node.top * (HEIGHT / 2)}px)`,
                                  }}
                              />
                          )}
                      />

                  </div>
                </CardBody>
              </Card>
        </Container>
      </>
    );
  }
}

export default Family;