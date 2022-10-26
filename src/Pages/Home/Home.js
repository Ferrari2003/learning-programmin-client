import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaArrowRight, FaCheck, FaRegFolderOpen } from "react-icons/fa";
import Hero from "./Hero/Hero";
import "./Home.css";
import { AiOutlineRise } from "react-icons/ai";
import imgLern from "../../Assets/Home/learn-online-right-img.svg";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <div className="d-flex container justify-content-center gap my-5">
        <div className="box shadow rounded text-center  p-3">
          <div>
            <FaRegFolderOpen
              className="text-primary"
              size={"3em"}
            ></FaRegFolderOpen>
          </div>
          <div className="ms-3">
            <h5 className="text-primary">40+ UX Courses</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              vero.
            </p>
          </div>
        </div>
        <div className="box shadow rounded text-center  p-3">
          <div>
            <FaRegFolderOpen
              className="text-primary"
              size={"3em"}
            ></FaRegFolderOpen>
          </div>
          <div className="ms-3">
            <h5 className="text-primary">40+ UX Courses</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              vero.
            </p>
          </div>
        </div>
        <div className="box shadow rounded text-center  p-3">
          <div>
            <FaRegFolderOpen
              className="text-primary"
              size={"3em"}
            ></FaRegFolderOpen>
          </div>
          <div className="ms-3">
            <h5 className="text-primary">40+ UX Courses</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              vero.
            </p>
          </div>
        </div>
      </div>
      <Container>
        <Row>
          <Col>
            <img src={imgLern} alt="" />
          </Col>
          <Col>
            <AiOutlineRise
              style={{
                // backgroundColor: "blue",
                color: "#fff",
                borderRadius: "50px",
                padding: "10px",
              }}
              size={"3em"}
              className="bg-primary"
            ></AiOutlineRise>
            <h2>Learn new skills online with top educators</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur commodi, minus dolor id cum amet repellendus
              repudiandae optio incidunt modi.
            </p>

            {/* Icon Lists  */}

            <div className="mb-4 d-flex align-items-center">
              <span className="me-3">
                <FaCheck className="text-primary"></FaCheck>
              </span>
              <span>
                Techniques to engage effectively with vulnerable young people.
              </span>
            </div>
            <div className="mb-4 d-flex align-items-center">
              <span className="me-3">
                <FaCheck className="text-primary"></FaCheck>
              </span>
              <span>
                Join millions of people from around the world learning together.
              </span>
            </div>
            <div className="mb-4 d-flex align-items-center">
              <span className="me-3">
                <FaCheck className="text-primary"></FaCheck>
              </span>
              <span>
                Join millions of people from around the world learning together.
                Online learning is as easy and natural.
              </span>
            </div>
            {/* Icon Lists End */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
