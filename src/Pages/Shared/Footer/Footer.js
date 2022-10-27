import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import "./Footer.css";
import logo from "../../../Assets/Logo/logo1.svg";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-primary text-light">
      <Container className="pt-5">
        <Row className="align-items-center">
          <Col xs={12} md={4}>
            <div
              // onClick={() => navigate("/")}
              className="d-flex align-items-center navbar-brand justify-content-center justify-content-md-start"
            >
              <img
                alt=""
                src={logo}
                width="60"
                height="60"
                className="d-inline-block align-top me-2"
              />
              <span className="fw-bold text-light">LEARN HIVE</span>
            </div>
            <p className="pt-2 text-center text-md-start">
              No matter your skill level, you’ll find so much to learn in a wide
              range of creative categories.
            </p>
          </Col>
          <Col>
            <Nav className="align-items-center g-2 text-light gap justify-content-center footer-nav">
              <Link to="/" className="text-light">
                Home
              </Link>
              <Link className="text-light" to="/about">
                About Us
              </Link>
              <Link className="text-light" to="/courses">
                Courses
              </Link>
              <Link className="text-light" to="/contact">
                Contact
              </Link>
            </Nav>
            <div className="justify-content-center d-flex mt-3 gap social-icon">
              <span>
                <FaFacebook className="fa-login" size={"1.3em"}></FaFacebook>
              </span>
              <span>
                <FaInstagram className="fa-login" size={"1.3em"}></FaInstagram>
              </span>
              <span>
                <FaTwitter className="fa-login" size={"1.3em"}></FaTwitter>
              </span>
              <span>
                <FaLinkedin className="fa-login" size={"1.3em"}></FaLinkedin>
              </span>
            </div>
          </Col>
          <hr className="mt-4" />
        </Row>
      </Container>
      <p className="mb-0 text-light text-center py-4">
        Copyright ©2022 All rights reserved | This template is made by Al-Amin
        Hossain
      </p>
    </div>
  );
};

export default Footer;
