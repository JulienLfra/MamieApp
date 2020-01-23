import React from 'react'
import { Link } from "../../../node_modules/react-router-dom";

// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Nav,
  Media,
  } from "reactstrap";

const UserNav = ({ users }) => {
  return (
    <Nav className="align-items-center d-none d-md-flex" navbar>
      {users.map((user) => (
        <UncontrolledDropdown nav>
          <DropdownToggle className="pr-0" nav>
            <Media className="align-items-center">
              <span className="avatar avatar-sm rounded-circle">
                <img
                  alt="..."
                  src={user.photo}
                />
              </span>
              <Media className="ml-2 d-none d-lg-block">
                <span className="mb-0 text-sm font-weight-bold">
                    {user.prenom + " " + user.nom}
                </span>
              </Media>
            </Media>
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-arrow" right>
            <DropdownItem className="noti-title" header tag="div">
              <h6 className="text-overflow m-0">Bonjour!</h6>
            </DropdownItem>
            <DropdownItem to="/admin/user-profile" tag={Link}>
              <i className="ni ni-single-02" />
              <span>Mon profil</span>
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={e => e.preventDefault()}>
              <i className="ni ni-user-run" />
              <span>Déconnexion</span>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      ))}
    </Nav>
  )
};

export default UserNav