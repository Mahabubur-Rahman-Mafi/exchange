import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import "./Shared.css";
import { UserAuth } from "../../Auth/AuthContext";
import { GoogleAuthProvider } from "firebase/auth";
import toast from "react-hot-toast";

const SignUp = () => {
  const googleProvider = new GoogleAuthProvider();
  const { googleAuthProvider, createUser, setUser, nameUpdate } = useContext(UserAuth);
  const [er, setEr] =useState('')

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const { register, handleSubmit, } = useForm();

  const onSubmit = (d) => {
    createUser(d.email, d.password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        nameUpdate(d.name);
        navigate(from, { replace: true });
        toast.success('Sign Up Successfully')
      })
      .catch((e) => {
        setEr(e.messages);
      });

    // make db
    const userData = {
      email: d.email,
      name: d.name,
      role: d.type,
    };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error('SignUp Failed')
      });
  };

  // google
  const googleButton = () => {
    googleAuthProvider(googleProvider)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((e) => {
        setEr(e.messages);
      });
  };
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
              {...register("name", { required:true })}
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
          <p className="text-danger">{ er}</p>
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

export default SignUp;
