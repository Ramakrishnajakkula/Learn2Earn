import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';

function SignUpPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { firstName, lastName, email, password, confirmPassword } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', formData);
      localStorage.setItem('token', res.data.token);
      navigate('/student-dashboard');
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={onSubmit}>
            <Form.Group controlId="formFirstName" className="mb-3">
              <Form.Label>First Name:</Form.Label>
              <Form.Control 
                type="text" 
                name="firstName" 
                value={firstName} 
                onChange={onChange} 
                placeholder="Enter your first name" 
                required 
              />
            </Form.Group>
            <Form.Group controlId="formLastName" className="mb-3">
              <Form.Label>Last Name:</Form.Label>
              <Form.Control 
                type="text" 
                name="lastName" 
                value={lastName} 
                onChange={onChange} 
                placeholder="Enter your last name" 
                required 
              />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email:</Form.Label>
              <Form.Control 
                type="email" 
                name="email" 
                value={email} 
                onChange={onChange} 
                placeholder="Enter your email" 
                required 
              />
            </Form.Group>
            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Password:</Form.Label>
              <Form.Control 
                type="password" 
                name="password" 
                value={password} 
                onChange={onChange} 
                placeholder="Enter your password" 
                required 
              />
            </Form.Group>
            <Form.Group controlId="formConfirmPassword" className="mb-3">
              <Form.Label>Confirm Password:</Form.Label>
              <Form.Control 
                type="password" 
                name="confirmPassword" 
                value={confirmPassword} 
                onChange={onChange} 
                placeholder="Confirm your password" 
                required 
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Sign Up
            </Button>
          </Form>
          <div className="mt-3 text-center">
            <a href="/login">Already have an account? Login</a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUpPage;
