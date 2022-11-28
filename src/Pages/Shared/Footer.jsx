import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaExternalLinkSquareAlt, FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <Container className="py-3">
      <Row className="justify-center align-items-center">
        <Col sm={12} md={6} lg={4} className="text-center text-lg-start">
          <Image src={logo} width="160px" className="mb-2" />
          <p>
            Ex-change is E-commerce website. <br />
            You can buy and sell your used product here.
          </p>
        </Col>
        <Col sm={12} md={6} lg={4} className="text-center">
          <p className="fw-semibold">All right service by Ex-change</p>
        </Col>
        <Col sm={12} md={6} lg={4} className="text-center">
          <div>
            <Link className="text-primary fs-2 me-2 " >
              <FaFacebookSquare />
            </Link>
            <Link className="text-primary fs-2 me-2 " >
              <FaLinkedin />
            </Link>
            <Link className="text-primary fs-2" >
              <FaInstagramSquare />
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
