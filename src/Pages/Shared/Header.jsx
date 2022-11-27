import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import logo from "../../assets/logo.png";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import "./Shared.css";
import { Image } from "react-bootstrap";
import { UserAuth } from "../../Auth/AuthContext";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const { user, logOutUser } = useContext(UserAuth);
  const navigate = useNavigate()

  const buttonLogOut = () => {
    logOutUser()
      navigate('/')
      .then()
    .catch(e=>console.log(e))
  }
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="transparent" className="mt-2">
        <Container>
          <NavLink to="/">
            <img
              src={logo}
              width="160px"
              height="35px"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto fs-5 menu-section">
              <NavLink to="/" className="me-3">
                Home
              </NavLink>
              <NavLink to="/blog" className="me-3">
                Blog
              </NavLink>
              <NavLink to="/product" className="me-3">
                Product
              </NavLink>
              {user?.uid ? <NavLink to="/dashboard">DashBoard</NavLink> : ""}
            </Nav>
            <Nav>
              {user?.uid ? (
                <>
                  {user?.photoURL ? (
                    <Image
                      src={user.photoURL}
                      width="40px"
                      height="40px"
                      roundedCircle
                    />
                  ) : (
                    <FaUserCircle className="fs-2 p-0"></FaUserCircle>
                  )}
                  <Button variant="outline-primary" className="ms-3" onClick={buttonLogOut}>
                    Log Out
                  </Button>
                </>
              ) : (
                <Link to="/login">
                  <Button variant="outline-primary">Log in</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* form section  */}
      <Form className="d-flex w-75 mx-auto my-3">
        <Form.Control
          type="search"
          placeholder="Search your Product"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </div>
  );
};

export default Header;
