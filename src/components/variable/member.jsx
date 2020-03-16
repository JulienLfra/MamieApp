import React from 'react'

// reactstrap components
import {
    Button,
    Media
  } from "reactstrap";

  import Const from "../../const.js";

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
                  src={member.photo}
                />
              </a>
              <Media>
                <span className="mb-0 text-sm">
                  {member.prenom + " " + member.nom}
                </span>
              </Media>
            </Media>
          </th>
          <td>
            <p>{member.age}</p>
          </td>
          <td className="align-items-center">
            <Button
              color="gray dark"
              href="#pablo"
              onClick={() => { 
                var webpoint;
                if(member.abloque){
                  webpoint = (Const.webpoint_debloquer + member.mail).toString()
                }else{
                  webpoint = (Const.webpoint_bloquer + member.mail).toString()
                }
                fetch(webpoint, { 
                  method: 'POST', // or ‘PUT’
                  body: JSON.stringify({mail:"plaideaug83170%40gmail.com", mailtarget:member.mail}), // data can be `string` or {object}!
                  headers:{ 'Content-Type': 'application/json' } })
                    .then(res => res.json())
                      .catch(error => console.error('Error:', error))
                        .then(response => console.log('Success:', response));

                  setTimeout(() => { document.location.reload(true); }, 1000);
              }}
            >
              {(() => {
                switch (member.abloque) {
                  case true:   return <img
                                          alt="..."
                                          className="rounded-circle"
                                          src={require("../../assets/img/theme/icon-visible.png")}
                                        />;
                  case false: return <img
                                          alt="..."
                                          className="rounded-circle"
                                          src={require("../../assets/img/theme/icon-cacher.png")}
                                        />;
                }
              })()}
            </Button>
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