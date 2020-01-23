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

class Family extends React.Component {


  render() {
      const myID = '1';

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
                    {/* TODO : Arbre généalogique */}

                      <ReactFamilyTree
                          node=
                            {[
                                {
                                    "id": "0",
                                    "gender": "male",
                                    "name": "Benoit Molinet",
                                    "parents": [
                                        {
                                            "id": "2",
                                            "type": "blood"
                                        },
                                        {
                                            "id": "3",
                                            "type": "blood"
                                        }
                                    ],
                                    "siblings": [],
                                    "spouses": [
                                        {
                                            "id": "1",
                                            "type": "married"
                                        }
                                    ],
                                    "children": []
                                },
                                {
                                    "id": "1",
                                    "gender": "female",
                                    "name": "Charlotte Molinet",
                                    "parents": [],
                                    "siblings": [],
                                    "spouses": [
                                        {
                                            "id": "0",
                                            "type": "married"
                                        }
                                    ],
                                    "children": []
                                },
                                {
                                    "id": "2",
                                    "gender": "female",
                                    "name": "Mamie Molinet",
                                    "parents": [],
                                    "siblings": [],
                                    "spouses": [
                                        {
                                            "id": "3",
                                            "type": "married"
                                        }
                                    ],
                                    "children": [
                                        {
                                            "id": "0",
                                            "type": "blood"
                                        }
                                    ]
                                },
                                {
                                    "id": "3",
                                    "gender": "male",
                                    "name": "Papy Molinet",
                                    "parents": [],
                                    "siblings": [],
                                    "spouses": [
                                        {
                                            "id": "2",
                                            "type": "married"
                                        }
                                    ],
                                    "children": [
                                        {
                                            "id": "0",
                                            "type": "blood"
                                        }
                                    ]
                                },
                            ]}
                          nodes = {
                              [
                                  {
                                      "id": "1",
                                      "gender": "male",
                                      "name": "Benjamin Molinet",
                                      "parents": [
                                          {
                                              "id": "2",
                                              "type": "blood"
                                          },
                                          {
                                              "id": "4",
                                              "type": "blood"
                                          }
                                      ],
                                      "siblings": [
                                          {
                                              "id": "3",
                                          }
                                      ],
                                      "spouses": [],
                                      "children": []
                                  },
                                  {
                                      "id": "2",
                                      "gender": "male",
                                      "name": "Benoit Molinet",
                                      "parents": [],
                                      "siblings": [],
                                      "spouses": [
                                          {
                                              "id": "4",
                                          }
                                      ],
                                      "children": [
                                          {
                                              "id": "1",
                                          },
                                          {
                                              "id": "3",
                                          }
                                      ]
                                  },
                                  {
                                      "id": "3",
                                      "gender": "female",
                                      "name": "Charlotte Molinet",
                                      "parents": [
                                          {
                                              "id": "2",
                                          },
                                          {
                                              "id": "4",
                                          }
                                      ],
                                      "siblings": [],
                                      "spouses": [],
                                      "children": []
                                  },
                                  {
                                      "id": "4",
                                      "gender": "female",
                                      "name": "Anne Mary",
                                      "parents": [],
                                      "siblings": [],
                                      "spouses": [
                                          {
                                              "id": "2",
                                          }
                                      ],
                                      "children": [
                                          {
                                              "id": "1",
                                          },
                                          {
                                              "id": "3",
                                          }
                                      ]
                                  }
                              ]
                                   }
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