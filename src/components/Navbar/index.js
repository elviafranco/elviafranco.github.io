import React from "react";
import "./style.css";
import { Link } from 'react-router-dom'; 
// import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from "../Navbar/logo.png";
// import Scrollspy from 'react-scrollspy';

const NavBar = () => {
return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand as={Link} to="/">
    <img
    src={logo}
    width="30"
    height="30"
    alt="profile"/>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="mr-auto">
      <Nav.Link as={Link} to="/work">Work</Nav.Link>
      <Nav.Link as={Link} to="/profile"> Profile + Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
);
}

export default NavBar;

