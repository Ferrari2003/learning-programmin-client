import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Courses = () => {
  const { data } = useContext(AuthContext);

  return (
    <div>
      <Container className="vh-100">
        <Row className="mt-5">
          <Col md={3}>
            {data.map((course) => (
              <Link>{course.displayName}</Link>
            ))}
          </Col>
          <Col>
            <Row xs={1} md={2} className="g-4">
              {data.map((course) => (
                <Col>
                  <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                      <Card.Title>{course.displayName}</Card.Title>
                      <Card.Text>
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </Card.Text>
                    </Card.Body>
                    <Link to={`/courses/${course.id}`}>
                      <button>Select</button>
                    </Link>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
