import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { UserAuth } from "../../Auth/AuthContext";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const { googleAuthProvider, userLogIn } = useContext(UserAuth);
  const { register, handleSubmit, } = useForm();
  const googleProvider = new GoogleAuthProvider()
  const navigate = useNavigate()
  const onSubmit = (data) => {
    userLogIn(data.email, data.password)
    .then(result => {
      const user = result.user
      console.log(user);
      navigate('/')
    })
      .catch(e => {
      console.log(e);
    })
  }

  // google
  const googleButton = () => {
    googleAuthProvider(googleProvider)
      .then(result => {
        const user = result.user
        navigate('/')
      })
      .catch(
        e => {
          console.log(e);
      }
    )
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Log In | ex-change</title>
      </Helmet>
      <Container>
        <h1 className="text-center mt-4">Log Here</h1>
        <Form
          onSubmit={handleSubmit(onSubmit)}
          className="w-50 mx-auto mt-5 p-5 signup-design"
          variant="transparent"
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="fs-5 fw-semibold">Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email Address"
              {...register("email", { required: true })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="fs-5 fw-semibold">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="w-100 mt-4 py-2 fs-5 fw-semibold"
          >
            Log in
          </Button>
          <p className="text-center my-3">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
          <Button
            className="w-100 py-2 fs-5 fw-semibold"
            variant="outline-dark"
            onClick={googleButton}
          >
            <FaGoogle className="me-2" />
            Go with Google
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Login;
