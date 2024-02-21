import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import logo  from '../../assets/logo/logo.png';
import  Facebook from '../../assets/iconos/Facebook svg.svg';
import  Instagram from '../../assets/iconos/Instagram svg.svg';
import   X from '../../assets/iconos/X svg.svg';


import './footer.css';
const Footer = () => {
  return (
    <Container fluid className="footer-container">
      <Row>
        <Col className="column">
          {/* Primera columna - Logo */}
          <Image src={logo} alt="Logo" className="logo" fluid />
        </Col>
        <Col className="column">
          {/* Segunda columna - Párrafo */}
          <p>Texto para la segunda columna del footer.</p>
        </Col>
        <Col className="column">
          {/* Tercera columna - Lista */}
          <ListGroup>
            <ListGroup.Item>Elemento 1</ListGroup.Item>
            <ListGroup.Item>Elemento 2</ListGroup.Item>
            <ListGroup.Item>Elemento 3</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col className="column">
          {/* Cuarta columna - Párrafo */}
          <p>Texto para la cuarta columna del footer.</p>
        </Col>
        <Col className="column">
          {/* Quinta columna - Redes Sociales */}
          <div className="social-media">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Image src={Instagram} alt="Facebook" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Image src={Facebook} alt="Twitter" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Image src={X} alt="Twitter" />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
