import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../../assests/logo/Logo.png";
export const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect bg="dark" data-bs-theme="dark"  expand="md">
          <Navbar.Brand href="#home">
            <img
              src={Logo} // Replace with the path to your logo image
              alt="Logo"
              width="50px"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#dashboard">Dashboard</Nav.Link>
            <Nav.Link href="#logout">Logout</Nav.Link>
          </Nav>
          </Navbar.Collapse>
      </Navbar>
      <br />
    </div>
  );
};
