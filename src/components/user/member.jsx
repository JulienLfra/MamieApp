import React from 'react'

// reactstrap components
import {
    Button,
    Media
  } from "reactstrap";

const Member = ({ members }) => {
  return (
    <tbody>
      {members.map((member) => (
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
                  src={require("../../assets/img/theme/member1.jpg")}
                />
              </a>
              <Media>
                <span className="mb-0 text-sm">
                  {member.nom_mission}
                </span>
              </Media>
            </Media>
          </th>
          <td>
            <p>{member.id_mission}</p>
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
                src={require("../../assets/img/theme/icon-delete.png")}
              />
            </Button>
          </td>
        </tr>
      ))}
    </tbody>
  )
};

export default Member