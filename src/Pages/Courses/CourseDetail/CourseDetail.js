import React, { useContext } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsStarFill } from "react-icons/bs";
import { FaIcons } from "react-icons/fa";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import "./CourseDetail.css";

const CourseDetail = () => {
  const courseSingle = useLoaderData();
  const { displayName } = courseSingle;
  const { setSelected } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleEnroll = () => {
    console.log("enrolled clicked");
    setSelected(courseSingle);
    navigate("/checkout");
  };
  return (
    <div>
      {/* {courseSingle.displayName}
      <button onClick={handleEnroll}> enroll this course</button> */}

      <section
        className=" include-bg pt-150 pb-150 breadcrumb__overlay text-light "
        style={{
          backgroundImage: `url("https://i.ibb.co/DQC36zr/7915212-3785210-1900x.jpg")`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content text-center p-relative z-index-1">
                <h3 className="breadcrumb__title">{displayName}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Container>
        <Row className="my-5">
          <Col md={9} className="px-3 ">
            <h2 className="my-4">{displayName}</h2>
            <div className="d-flex gap">
              <div>
                <p className="mb-0">
                  <strong>Mentor</strong>
                </p>
                <p>Mentor</p>
              </div>
              <div>
                <p className="mb-0">
                  <strong>Last Update:</strong>
                </p>
              </div>
              <div>
                <p className="mb-0">
                  <strong>Review:</strong>
                </p>
                <BsStarFill style={{ color: "goldenrod" }}></BsStarFill>
                <BsStarFill style={{ color: "goldenrod" }}></BsStarFill>
                <BsStarFill style={{ color: "goldenrod" }}></BsStarFill>
                <BsStarFill style={{ color: "goldenrod" }}></BsStarFill>
                <BsStarFill style={{ color: "goldenrod" }}></BsStarFill>
              </div>
            </div>
            <img
              className="img-fluid w-100"
              src="https://i.ibb.co/ftXxcJf/5778864.jpg"
              alt=""
            />
            <h3 className="my-4">Course Overview</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              nulla aperiam expedita necessitatibus vero odio possimus eligendi
              a et? Temporibus, dolores laudantium facere fugiat possimus
              blanditiis reiciendis eius qui inventore, ex quia natus quisquam
              voluptates illo consequuntur ipsa assumenda dolore! Nihil
              doloremque repellat cum neque debitis impedit nesciunt et.
              Obcaecati placeat reiciendis, accusantium tenetur asperiores dicta
              ipsa sit, tempora, totam odio facere at! Autem commodi nesciunt
              quaerat exercitationem, vel odit provident minus veritatis iure,
              vero possimus sapiente. Fuga repudiandae doloribus omnis,
              necessitatibus at sit iste? Numquam dolorum aspernatur illum
              voluptas repellat velit ex ad provident. Excepturi omnis deserunt
              asperiores. Commodi.
            </p>
          </Col>

          <Col md={3}>
            <div className="rounded shadow p-4 my-3">
              <img
                className="img-fluid d-none d-md-block"
                src="https://i.ibb.co/ftXxcJf/5778864.jpg"
                alt=""
              />

              <div class="course__video-content mb-35 mt-4">
                <ul>
                  <li class="d-flex">
                    <div class="course__video-icon">
                      <FaIcons></FaIcons>
                    </div>
                    <div class="course__video-info ms-3">
                      <p>
                        <span className="h6 text-dark">Instructor :</span>{" "}
                        Eleanor Fant
                      </p>
                    </div>
                  </li>
                  <li class="d-flex ">
                    <div class="course__video-icon">
                      <FaIcons></FaIcons>
                    </div>
                    <div class="course__video-info ms-3">
                      <p>
                        <span className="h6 text-dark">Lectures :</span> 14
                      </p>
                    </div>
                  </li>
                  <li class="d-flex ">
                    <div class="course__video-icon">
                      <FaIcons></FaIcons>
                    </div>
                    <div class="course__video-info ms-3">
                      <p>
                        <span className="h6 text-dark">Duration :</span> 6 weeks
                      </p>
                    </div>
                  </li>
                  <li class="d-flex ">
                    <div class="course__video-icon">
                      <FaIcons></FaIcons>
                    </div>
                    <div class="course__video-info ms-3">
                      <p>
                        <span className="h6 text-dark">Enrolled :</span> 20
                        students
                      </p>
                    </div>
                  </li>
                  <li class="d-flex ">
                    <div class="course__video-icon">
                      <FaIcons></FaIcons>
                    </div>
                    <div class="course__video-info ms-3">
                      <p>
                        <span className="h6 text-dark">Language :</span> English
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <span className="h4 fw-bold mb-0">$200</span>
                  <span
                    className="h5  mb-0 amount ms-2"
                    style={{ color: "#777a7c" }}
                  >
                    $200
                  </span>
                </div>
                <span
                  className=" rounded px-3 py-1"
                  style={{
                    backgroundColor: "rgba(252, 76, 86, 0.08)",
                    color: "#fc4c56",
                    fontWeight: "500",
                  }}
                >
                  13% Off
                </span>
              </div>
              <button
                className="btn btn-primary w-100 mt-4"
                onClick={handleEnroll}
              >
                {" "}
                Enroll{" "}
              </button>
            </div>
            <div className="rounded shadow p-4 my-3">
              <h4>Related Course</h4>
              <div class="course__video-content mb-35 mt-4">
                <ul>
                  <Link>
                    <li class="d-flex align-items-center">
                      <div class="course__video-icon">
                        <img
                          className="img-fluid"
                          src={courseSingle.img}
                          alt=""
                          width={"80px"}
                        />
                      </div>
                      <div class="course__video-info ms-3">
                        <p className="h6">{displayName}</p>
                      </div>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
            <div></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CourseDetail;
