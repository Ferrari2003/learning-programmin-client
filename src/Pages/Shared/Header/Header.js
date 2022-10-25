import React from "react";
import logo from "../../../Assets/Logo/logo1.svg";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img
              alt=""
              src={logo}
              width="60"
              height="60"
              className="d-inline-block align-top me-2"
            />{" "}
            <span className="fw-bold text-primary">LEARN HIVE</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>About Us</Nav.Link>
              <Nav.Link>Courses</Nav.Link>
              <Nav.Link>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
