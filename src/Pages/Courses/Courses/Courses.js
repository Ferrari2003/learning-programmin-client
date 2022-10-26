import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../LeftNav/LeftNav";

const Courses = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={3}>
            <LeftNav></LeftNav>
          </Col>
          <Col>
            <h1>Courses Here</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
