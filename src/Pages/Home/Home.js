import { Col, Container, Row, Card } from "react-bootstrap";
import { FaCheck, FaRegFolderOpen } from "react-icons/fa";
import Hero from "./Hero/Hero";
import "./Home.css";
import { AiOutlineRise } from "react-icons/ai";
import imgLern from "../../Assets/Home/learn-online-right-img.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Button from "react-bootstrap/Button";

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

      <Container>
        <h2>Our Top Subjects</h2>
        <Row className="text-center text-light">
          <Col>
            <div className="subject-box rounded shadow  bg-primary py-5">
              <img src="https://i.ibb.co/m4LC5sh/graphic-design.png" alt="" />
              <h4>Graphics Design</h4>
            </div>
          </Col>
          <Col>
            <div className="subject-box rounded shadow  bg-primary py-5">
              <img src="https://i.ibb.co/fNKwVWm/web-development.png" alt="" />
              <h4>Web Development</h4>
            </div>
          </Col>
          <Col>
            <div className="subject-box rounded shadow   bg-primary py-5">
              <img src="https://i.ibb.co/hdNhNrC/social-media.png" alt="" />
              <h4>Graphics Design</h4>
            </div>
          </Col>
        </Row>
        <Row className="text-center mt-4 text-light">
          <Col>
            <div className="subject-box rounded shadow  bg-primary py-5">
              <img src="https://i.ibb.co/j9CJDq3/ui.png" alt="" />
              <h4>Graphics Design</h4>
            </div>
          </Col>
          <Col>
            <div className="subject-box rounded shadow  bg-primary py-5">
              <img src="https://i.ibb.co/Ykdw0yz/data-science.png" alt="" />
              <h4>Web Development</h4>
            </div>
          </Col>
          <Col>
            <div className="subject-box rounded shadow   bg-primary py-5">
              <img src="https://i.ibb.co/RPxWrH0/deep-learning.png" alt="" />
              <h4>Graphics Design</h4>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="align-items-center">
          <Col>
            {/* <AiOutlineRise
              style={{
                // backgroundColor: "blue",
                color: "#fff",
                borderRadius: "50px",
                padding: "10px",
              }}
              size={"3em"}
              className="bg-primary"
            ></AiOutlineRise> */}
            <h2>Learner outcomes on courses you will take</h2>

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
          <Col>
            <img src={imgLern} alt="" />
          </Col>
        </Row>
      </Container>

      <Container className="my-5 mx-auto text-center">
        <div className="text-center mb-5">
          <h2>Meet Our Mentors</h2>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          loop={true}
          className="mySwiper"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
          navigation={true}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 10,
              navigation: false,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
        >
          <SwiperSlide>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://i.ibb.co/bBf5GbL/sergio-de-paula-c-Gmwf-HBDzk-unsplash.jpg"
              />
              <Card.Body>
                <Card.Title>Mathew K. Atkinson</Card.Title>
                <p>
                  <small>Digital Marketer</small>
                </p>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://i.ibb.co/8crs8Nv/christopher-campbell-r-DEOVt-E7v-Os-unsplash.jpg"
              />
              <Card.Body>
                <Card.Title>Erika M. Orozco</Card.Title>
                <p>
                  <small>UI/UX Expert</small>
                </p>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://i.ibb.co/3BzGwK6/jonas-kakaroto-KIPqvv-TOC1s-unsplash.jpg"
              />
              <Card.Body>
                <Card.Title>Joshua Roach</Card.Title>
                <p>
                  <small>Web Developer</small>
                </p>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://i.ibb.co/rdPTgsL/jonas-kakaroto-mj-Rwhvq-EC0-U-unsplash.jpg"
              />
              <Card.Body>
                <Card.Title>Taj Alice</Card.Title>
                <p>
                  <small>Graphics Designer</small>
                </p>
              </Card.Body>
            </Card>
          </SwiperSlide>
        </Swiper>
      </Container>

      <Container>
        <Row>
          <Col>
            <img src={imgLern} alt="" />
          </Col>
          <Col>
            <h2>Learn new skills online with top educators</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur commodi, minus dolor id cum amet repellendus
              repudiandae optio incidunt modi.
            </p>
            <Button variant="primary">View Course</Button>
            {/* Icon Lists End */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
