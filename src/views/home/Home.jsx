import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import SECT1 from '../../assets/banner/SECT1.png';
import SECT2 from '../../assets/banner/SECT2.png';
import SECT3 from '../../assets/banner/SECT3.png';
import SECT4 from '../../assets/banner/SECT4.png';
import CallToAction from '../../assets/banner/CallToAction.png';
import './home.css';

const Home = () => {
  return (
    <Container fluid>
      {/* Section 1 */}
      <Row className="m-5 p-2">
        <Col className=" align-items-center justify-content-center"><Image src={SECT1} /></Col>
        <Col className="p-2 align-items-center justify-content-center"><Image src={SECT2} /></Col>
      </Row>

      {/* Call to Action */}
      <Row className="m-5 align-items-center justify-content-center">
        <Col className="text-center">
          <Image src={CallToAction} fluid />
        </Col>
      </Row>

      {/* Shoe Brands */}
      <Row className="m-5 align-items-center justify-content-center">
        <Col>Converse 3</Col>
        <Col>New Balance 1</Col>
        <Col>Adidas 5</Col>
        <Col>Puma 3</Col>
        <Col>Vans 1</Col>
      </Row>

      {/* Section 2 */}
      <Row className="m-5 p-2">
        <Col className=" align-items-center justify-content-center"><Image src={SECT3} /></Col>
        <Col className="p-2 align-items-center justify-content-center"><Image src={SECT4} /></Col>
      </Row>
    </Container>
  );
};

export default Home;
