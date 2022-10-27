import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link, useLoaderData } from "react-router-dom";
import { BsClock, BsFileBarGraph, BsStarFill } from "react-icons/bs";
import { FiUserPlus } from "react-icons/fi";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Courses = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <Container className="">
        <Row className="mt-5">
          <Col
            md={3}
            className=" px-5 pt-5 rounded"
            style={{ backgroundColor: "rgba(176, 203, 228, 0.627)" }}
          >
            <h3 className="text-center mb-3">All Courses</h3>
            {data.map((course) => (
              <Link
                className="d-block mb-3"
                style={{ textDecoration: "none" }}
                key={course.id}
                to={`/courses/${course.id}`}
              >
                {course.displayName}
              </Link>
            ))}
          </Col>
          <Col>
            <Row xs={1} md={2} lg={3} className="g-4">
              {data.map((course) => (
                <Col key={course.id}>
                  <Card>
                    <Card.Img variant="top" src={course.img} />
                    <Card.Body>
                      <Card.Title>{course.displayName}</Card.Title>
                      <Row className="flex-wrap text-center mt-3">
                        <Col>
                          <div>
                            <BsClock className="text-primary"></BsClock>
                          </div>
                          <span>{course.class} class</span>
                        </Col>
                        <Col className="flex-grow-1">
                          <div>
                            <BsFileBarGraph className="text-primary"></BsFileBarGraph>
                          </div>
                          <span> {course.level}</span>
                        </Col>
                        <Col>
                          <div>
                            <FiUserPlus className="text-primary"></FiUserPlus>
                          </div>
                          <span>{course.enrolled}</span>
                        </Col>
                      </Row>
                      <Row className="flex-wrap mt-4 justify-content-between ">
                        <Col>
                          <strong>Price: </strong>
                          <span>{course.price}$</span>
                        </Col>
                        <Col className=" d-flex align-items-center justify-content-end">
                          <BsStarFill
                            style={{ color: "goldenrod" }}
                          ></BsStarFill>
                          <span className="ms-1"> {course.rating}</span>
                        </Col>
                      </Row>
                      <div className="text-center mt-4 mb-2">
                        <Link to={`/courses/${course.id}`}>
                          <button className="w-100 btn btn-primary">
                            View Detail
                          </button>
                        </Link>
                      </div>
                    </Card.Body>
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
