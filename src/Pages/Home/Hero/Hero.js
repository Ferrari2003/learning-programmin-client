import React from "react";
import heroBg from "../../../Assets/Home/hero-bg.svg";
import Button from "react-bootstrap/Button";
import { Col, Container, Row } from "react-bootstrap";
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
            <h1>Start Now Your</h1>
            <h1>Online Education</h1>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
              accusamus, provident quas fuga repudiandae, ipsa nostrum eum
              eligendi voluptas, aliquam voluptates qui perferendis laborum
              laboriosam ut repellat necessitatibus accusantium est dolores
            </p>
            <Button variant="primary">Free Trial</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
