import React from "react";
import { Navbar, Container, Nav, Form, FormControl } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.png";

const Header = () => {
  const activeStyle = {
    fontWeight: "500",
    color: "#ffc107",
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      className="py-3"
      sticky="top"
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
            <Nav.Link activeStyle={activeStyle} as={NavLink} to="/home">
              Home
            </Nav.Link>
            <Nav.Link activeStyle={activeStyle} as={NavLink} to="/Courses">
              Courses
            </Nav.Link>
            <Nav.Link activeStyle={activeStyle} as={NavLink} to="/About">
              About
            </Nav.Link>
            <Nav.Link activeStyle={activeStyle} as={NavLink} to="/Contact">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
