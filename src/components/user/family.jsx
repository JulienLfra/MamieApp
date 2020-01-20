import React from 'react'
import { Link } from "../../../node_modules/react-router-dom";

// reactstrap components
import {
    Button,
    Media,
    UncontrolledTooltip
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
               href="#pablo"
             >
               <img
                 alt="..."
                 src={require("../../assets/img/theme/icon-family.png")}
               />
             </span>
             <Media>
               <span className="mb-0 text-sm">
                {family.family_name}
               </span>
             </Media>
           </Media>
         </th>
         <td>
           <p>{family.family_number}</p>
         </td>
         <td>
           <div className="avatar-group">
             <a
               className="avatar avatar-sm"
               href="#pablo"
               id="tooltip731399078"
               onClick={e => e.preventDefault()}
             >
               <img
                 alt="..."
                 className="rounded-circle"
                 src={require("../../assets/img/theme/member1.jpg")}
               />
             </a>
             <UncontrolledTooltip
               delay={0}
               target="tooltip731399078"
             >
               Ryan Bozon
             </UncontrolledTooltip>
             <a
               className="avatar avatar-sm"
               href="#pablo"
               id="tooltip491083084"
               onClick={e => e.preventDefault()}
             >
               <img
                 alt="..."
                 className="rounded-circle"
                 src={require("../../assets/img/theme/member2.jpg")}
               />
             </a>
             <UncontrolledTooltip
               delay={0}
               target="tooltip491083084"
             >
               Nina Ugnon
             </UncontrolledTooltip>
             <a
               className="avatar avatar-sm"
               href="#pablo"
               id="tooltip528540780"
               onClick={e => e.preventDefault()}
             >
               <img
                 alt="..."
                 className="rounded-circle"
                 src={require("../../assets/img/theme/member3.jpg")}
               />
             </a>
             <UncontrolledTooltip
               delay={0}
               target="tooltip528540780"
             >
               Alexandra Bozon
             </UncontrolledTooltip>
             <a
               className="avatar avatar-sm"
               href="#pablo"
               id="tooltip237898869"
               onClick={e => e.preventDefault()}
             >
               <img
                 alt="..."
                 className="rounded-circle"
                 src={require("../../assets/img/theme/member4.jpg")}
               />
             </a>
             <UncontrolledTooltip
               delay={0}
               target="tooltip237898869"
             >
               Sophie Ugnon
             </UncontrolledTooltip>
           </div>
         </td>
         <td className="align-items-center">
           <Button
             to={"../admin/management-edit-family/" + family.family_id}
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
       </tr>
      ))}
    </tbody>
  )
};

export default Family