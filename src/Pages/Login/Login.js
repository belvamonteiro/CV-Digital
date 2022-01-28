import React from "react";
import { Col, Container, Row, Form, Button} from "react-bootstrap";
import "./Login.css"; //importing css style


const Login = () => {
  return (
      <>
      <Container>
        <Row className="mt-5 p-5">
          <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
          <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Palavra-passe</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="btn btn-primary d-block mx-auto mt-4" type="submit">
            Login
          </Button>
        </Form>
          </Col>
        </Row >
        <h3 className="mt-5 p-5"></h3>
      </Container>
      </>
  );
};

export default Login;

