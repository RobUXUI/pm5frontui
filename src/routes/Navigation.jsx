import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Logo from '../assets/logo/logo.svg';
// import './Navigation.css';

const Navigation = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/home">
          <Image src={Logo} fluid width="100px" />
        </Navbar.Brand>
      </Container>
      <Container fluid>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/home">
            HOME
          </Nav.Link>
          {/* Add more Nav.Link components for other navigation items */}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;

