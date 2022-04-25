import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { login } from "../Services/DataService";
import { GetLoggedInUserData } from "../Services/DataService";

export default function Login() {
  let navigate = useNavigate();
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const handleSubmit = async () => {
    let userData = {
      Username,
      Password,
    };
    let token = await login(userData);
    console.log(token)
    if (token.token != null) {
      localStorage.setItem("Token", token.token);
      GetLoggedInUserData(Username);
      navigate("/Dashboard");
    }
  };

  return (
    <Container>
      <Row>
        <Col
          className="mt-5"
          style={{ backgroundColor: "gray", borderRadius: 5, padding: 40 }}
        >
          <h1>Login</h1>
          <Form>
            <Form.Group className="mb-3" controlId="Username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Username"
                onChange={({ target }) => setUsername(target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={({ target: { value } }) => setPassword(value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
            <h4>Don't have an account?</h4>
            <Button onClick={() => navigate("/CreateAccount")}>
              Create Account
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
