import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsDownload, BsFilePdf, BsStarFill } from "react-icons/bs";
import { FaIcons } from "react-icons/fa";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import "./CourseDetail.css";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const CourseDetail = () => {
  const courseSingle = useLoaderData();
  const {
    displayName,
    img,
    author,
    class_length,
    description,
    enrolled,
    price,
    old_price,
    level,
    last_update,
  } = courseSingle;
  const { setSelected, allCourses } = useContext(AuthContext);
  console.log(courseSingle);

  const navigate = useNavigate();

  const handleEnroll = () => {
    console.log("enrolled clicked");
    setSelected(courseSingle);
    navigate("/checkout");
  };
  return (
    <div ref={ref}>
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
            <Row>
              <Col>
                <h2 className="my-4">{displayName}</h2>
              </Col>
              <Col xs={2}>
                <Pdf
                  targetRef={ref}
                  scale={0.45}
                  filename={`${displayName}.pdf`}
                >
                  {({ toPdf }) => (
                    <button onClick={toPdf} className="mt-5 btn-download">
                      <BsDownload size={"1.3em"}></BsDownload>
                      <BsFilePdf size={"1.3em"}></BsFilePdf>
                    </button>
                  )}
                </Pdf>
              </Col>
            </Row>
            <div className="d-flex gap mb-4">
              <div>
                <p className="mb-0">
                  <strong>Mentor:</strong>
                </p>
                <p className="mb-0">{author}</p>
              </div>
              <div>
                <p className="mb-0">
                  <strong>Last Update:</strong>
                  <p className="mb-0">{last_update}</p>
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
            <img className="img-fluid w-100" src={img} alt="" />
            <h3 className="my-4">Course Overview</h3>
            <p>{description}</p>
          </Col>

          <Col md={3}>
            <div className="rounded shadow p-4 my-3">
              <img className="img-fluid d-none d-md-block" src={img} alt="" />

              <div className="course__video-content mb-35 mt-4">
                <ul>
                  <li className="d-flex">
                    <div className="course__video-icon">
                      <FaIcons></FaIcons>
                    </div>
                    <div className="course__video-info ms-3">
                      <p>
                        <span className="h6 text-dark">Instructor : </span>
                        {author}
                      </p>
                    </div>
                  </li>
                  <li className="d-flex ">
                    <div className="course__video-icon">
                      <FaIcons></FaIcons>
                    </div>
                    <div className="course__video-info ms-3">
                      <p>
                        <span className="h6 text-dark">Class :</span>{" "}
                        {class_length}
                      </p>
                    </div>
                  </li>
                  <li className="d-flex ">
                    <div className="course__video-icon">
                      <FaIcons></FaIcons>
                    </div>
                    <div className="course__video-info ms-3">
                      <p>
                        <span className="h6 text-dark">Level : </span> {level}
                      </p>
                    </div>
                  </li>
                  <li className="d-flex ">
                    <div className="course__video-icon">
                      <FaIcons></FaIcons>
                    </div>
                    <div className="course__video-info ms-3">
                      <p>
                        <span className="h6 text-dark">Enrolled : </span>
                        {enrolled}
                      </p>
                    </div>
                  </li>
                  <li className="d-flex ">
                    <div className="course__video-icon">
                      <FaIcons></FaIcons>
                    </div>
                    <div className="course__video-info ms-3">
                      <p>
                        <span className="h6 text-dark">Language :</span> English
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <span className="h4 fw-bold mb-0">${price}</span>
                  <span
                    className="h5  mb-0 amount ms-2"
                    style={{ color: "#777a7c" }}
                  >
                    ${old_price}
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
              <div className="course__video-content mb-35 mt-4">
                <ul>
                  {allCourses.map((course) => (
                    <Link key={course.id} to={`/courses/${course.id}`}>
                      <li className="d-flex align-items-center">
                        <div className="course__video-icon">
                          <img
                            className="img-fluid"
                            src={course.img}
                            alt=""
                            width={"80px"}
                          />
                        </div>
                        <div className="course__video-info ms-3">
                          <p className="h6">{course.displayName}</p>
                        </div>
                      </li>
                    </Link>
                  ))}
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
