import React from "react";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import './Shared.css'

const SignUp = () => {
  const { register, handleSubmit, required } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sign Up | ex-change</title>
      </Helmet>
      <Container>
        <h1 className="text-center mt-4">Sign Up Here</h1>
        <Form
          onSubmit={handleSubmit(onSubmit)}
          className="w-50 mx-auto mt-5 p-5 signup-design"
          variant="transparent"
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="fs-5 fw-semibold">Your Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your Full Name"
              {...register("name", { required })}
            />
          </Form.Group>
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
          <FloatingLabel
            controlId="floatingSelect"
            label="Join as"
            className="fs-6 fw-semibold mt-4"
          >
            <Form.Select
              aria-label="Floating label select example"
              className="fs-5"
              {...register("type", { required: true })}
            >
              <option value="seller">Seller</option>
              <option value="buyer">Buyer</option>
            </Form.Select>
          </FloatingLabel>

          <Button
            variant="primary"
            type="submit"
            className="w-100 mt-4 py-2 fs-5 fw-semibold"
          >
            Sign Up
          </Button>
          <p className="text-center my-3">
            Already have an account? <Link to="/login">Log In</Link>
          </p>
          <Button
            className="w-100 py-2 fs-5 fw-semibold"
            variant="outline-dark"
          >
            <FaGoogle className="me-2" />
            Go with Google
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default SignUp;
