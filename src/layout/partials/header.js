import React from "react";
import { Navbar, Nav } from "react-bootstrap";
//import {useNavigate} from 'react-router-dom';
import Logo from "../../assests/logo/Logo.png";

import {LinkContainer} from 'react-router-bootstrap'
export const Header = () => {
  
  return (
    <div>
      <Navbar collapseOnSelect bg="dark" data-bs-theme="dark"  expand="md">
          <Navbar.Brand to="#home">
            <img
              src={Logo} // Replace with the path to your logo image
              alt="Logo"
              width="50px"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">

          <LinkContainer to="/dashboard"><Nav.Link>Dashboard</Nav.Link></LinkContainer>
          <LinkContainer to="/tickets"><Nav.Link>Tickets</Nav.Link></LinkContainer>
          <LinkContainer to=""><Nav.Link>LogOut</Nav.Link></LinkContainer>
            
          </Nav>
          </Navbar.Collapse>
      </Navbar>
      <br />
    </div>
  );
};
