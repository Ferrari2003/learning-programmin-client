import React from "react";
import heroBg from "../../../Assets/Home/hero-bg.svg";
import Button from "react-bootstrap/Button";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${heroBg})`,
        height: "90vh",
        backgroundSize: "auto",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center right",
        backgroundColor: "#b0cbe4a0",
      }}
      className="hero d-flex align-items-center"
    >
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <h1 className="hero-title">Start Now Your Online Education</h1>
            <p className="text-justify hero-text">
              Modern, creative, and sophisticated are the three main
              characteristics of an online training website templates, Courses.
              If you are ready to create an educational platform, you better
              start with Courses. You have tons of options to make the outcome
              that matches your project ideally.
            </p>
            <Link to="/courses">
              <Button variant="primary">Free Trial</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
