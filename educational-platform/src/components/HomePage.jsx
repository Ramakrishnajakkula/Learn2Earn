import React from 'react';
import { Button, Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const handleUserLogin = () => {
    navigate('/user-login');
  };

  const handleAdminLogin = () => {
    navigate('/admin-login');
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Educational Platform</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            <Nav.Link href="/privacy">Privacy Policy</Nav.Link>
            <Nav.Link href="/terms">Terms of Service</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <header className="text-center mt-5 mb-4">
        <h1>Welcome to Our Educational Platform</h1>
        <Button variant="primary" onClick={handleUserLogin}>User Login</Button>
        <Button variant="secondary" onClick={handleAdminLogin} className="ml-3">Admin Login</Button>
      </header>

      {/* Rest of the content */}
    </div>
  );
}

export default HomePage;
