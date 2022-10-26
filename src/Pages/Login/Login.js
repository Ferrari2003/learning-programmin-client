import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast, { Toaster } from "react-hot-toast";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import "./Login.css";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn, setLoading, providerLogin, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleLogin = () => {
    providerLogin(googleProvider)
      .then((res) => {
        setError("");
        toast.success("Successfully logged in!");
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };
  const handleGithubLogin = () => {
    providerLogin(githubProvider)
      .then((res) => {
        setError("");
        toast.success("Successfully logged in!");
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");

        if (user.emailVerified) {
          toast.success("Successfully logged in!");
          navigate(from, { replace: true });
        } else {
          toast.error(
            "Your email is not verified. Please verify your email address."
          );
          logOut()
            .then((res) => {})
            .catch((error) => console.log(error));
        }
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
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
              <Toaster position="top-center" reverseOrder={false} />

              <Button variant="primary" type="submit">
                Login
              </Button>

              <p>
                New To This Site? <Link to="/register">Create an account</Link>
              </p>
              <div className="or-text-box">
                <p className="or-text text-center">OR</p>
              </div>
              <div className="other-login text-primary text-center">
                <FaGoogle
                  onClick={handleGoogleLogin}
                  className="fa-login me-3"
                  size={"1.5em"}
                ></FaGoogle>
                <FaGithub
                  onClick={handleGithubLogin}
                  className="fa-login"
                  size={"1.5em"}
                ></FaGithub>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
