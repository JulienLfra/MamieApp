import React from 'react'
import { Link } from "../../../node_modules/react-router-dom";

// reactstrap components
import {
    Button,
    Media
  } from "reactstrap";

const Family = ({ families }) => {
  return (
    <tbody>
      {families.map((family) => (
         <tr>
         <th scope="row">
           <Media className="align-items-center">
             <span
               className="avatar rounded-circle mr-3"
             >
               <img
                 alt="..."
                 src={require("../../assets/img/theme/icon-family.png")}
               />
             </span>
             <Media>
               <span className="mb-0 text-sm">
                {family.nom}
               </span>
             </Media>
           </Media>
         </th>
         <td>
           <p>{family.nombreMembre}</p>
         </td>
         <td className="align-items-center">
           <Button
             to={"../admin/management-edit-family/" + family.id}
             tag={Link}
             color="primary"
           >
             <img
               alt="..."
               className="rounded-circle"
               src={require("../../assets/img/theme/icon-edit.png")}
             />
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

export default Family