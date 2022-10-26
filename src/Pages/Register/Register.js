import React, { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast, { Toaster } from "react-hot-toast";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const [accepted, setAccepted] = useState(false);
  const { createUser, updateUserProfile, verifyEmail } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, photoURL, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        handleUpdateUserProfile(name, photoURL);
        handleEmailVerification();
        toast.success("Please verify your email address.");
        navigate("/login");
      })
      .catch((e) => {
        console.error(e);
        setError(e.message);
      });

    const handleUpdateUserProfile = (name, photoURL) => {
      const profile = {
        displayName: name,
        photoURL: photoURL,
      };

      updateUserProfile(profile)
        .then(() => {})
        .catch((error) => console.error(error));
    };

    const handleEmailVerification = () => {
      verifyEmail()
        .then(() => {})
        .catch((error) => console.error(error));
    };

    const handleAccepted = (event) => {
      setAccepted(event.target.checked);
    };
  };
  return (
    <div>
      <Container className="login-container">
        <Row className="justify-content-center ">
          <Col xs={10} md={5}>
            <Form
              onSubmit={handleSubmit}
              className="p-5 rounded shadow my-5 mx-auto"
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                />
                {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo Url</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Photo Url"
                  name="photoURL"
                />
                {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                />
                {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                />
              </Form.Group>
              <div>
                {" "}
                <Form.Text className="text-danger fw-bold mb-5">
                  {error}
                </Form.Text>
              </div>

              <Button variant="primary" type="submit" className="">
                Register
              </Button>
              <Toaster></Toaster>

              <p>
                Already Have an account? <Link to="/login">please Login</Link>
              </p>
              <div className="or-text-box">
                <p className="or-text text-center">OR</p>
              </div>
              <div className="other-login text-primary text-center">
                <FaGoogle className="fa-login me-3" size={"1.5em"}></FaGoogle>
                <FaGithub className="fa-login" size={"1.5em"}></FaGithub>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
