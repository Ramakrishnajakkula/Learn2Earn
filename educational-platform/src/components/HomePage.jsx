import React from 'react';
import { Button, Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleGetStarted = () => {
    navigate('/login'); // Redirect to the login page
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
        <Button variant="primary" onClick={handleGetStarted}>Get Started</Button>
      </header>
      
      <Container>
        <section className="text-center mb-5">
          <h2>Our Courses</h2>
          <Row>
            <Col md={4}>
              {/* Course thumbnail and description */}
              <div className="course-card" onClick={handleGetStarted} style={{ cursor: 'pointer' }}>
                <img src="course-thumbnail.jpg" alt="Course Thumbnail" className="img-fluid" />
                <h3>Course Title</h3>
                <p>Course description goes here.</p>
              </div>
            </Col>
            <Col md={4}>
              {/* Additional Course */}
              <div className="course-card" onClick={handleGetStarted} style={{ cursor: 'pointer' }}>
                <img src="course-thumbnail.jpg" alt="Course Thumbnail" className="img-fluid" />
                <h3>Course Title</h3>
                <p>Course description goes here.</p>
              </div>
            </Col>
            <Col md={4}>
              {/* Additional Course */}
              <div className="course-card" onClick={handleGetStarted} style={{ cursor: 'pointer' }}>
                <img src="course-thumbnail.jpg" alt="Course Thumbnail" className="img-fluid" />
                <h3>Course Title</h3>
                <p>Course description goes here.</p>
              </div>
            </Col>
          </Row>
          <Button variant="secondary">View All Courses</Button>
        </section>
        
        <section className="text-center mb-5">
          <h2>Student Success Stories</h2>
          <Row>
            <Col md={4}>
              {/* Student testimonial */}
              <div className="testimonial-card">
                <img src="student-photo.jpg" alt="Student Photo" className="img-fluid" />
                <h3>Student Name</h3>
                <p>Success story goes here.</p>
              </div>
            </Col>
            <Col md={4}>
              {/* Additional Student */}
              <div className="testimonial-card">
                <img src="student-photo.jpg" alt="Student Photo" className="img-fluid" />
                <h3>Student Name</h3>
                <p>Success story goes here.</p>
              </div>
            </Col>
            <Col md={4}>
              {/* Additional Student */}
              <div className="testimonial-card">
                <img src="student-photo.jpg" alt="Student Photo" className="img-fluid" />
                <h3>Student Name</h3>
                <p>Success story goes here.</p>
              </div>
            </Col>
          </Row>
        </section>
        
        <section className="text-center mb-5">
          <h2>Client Testimonials</h2>
          <Row>
            <Col md={4}>
              {/* Client feedback */}
              <div className="testimonial-card">
                <img src="client-photo.jpg" alt="Client Photo" className="img-fluid" />
                <h3>Client Name</h3>
                <p>Feedback goes here.</p>
              </div>
            </Col>
            <Col md={4}>
              {/* Additional Client */}
              <div className="testimonial-card">
                <img src="client-photo.jpg" alt="Client Photo" className="img-fluid" />
                <h3>Client Name</h3>
                <p>Feedback goes here.</p>
              </div>
            </Col>
            <Col md={4}>
              {/* Additional Client */}
              <div className="testimonial-card">
                <img src="client-photo.jpg" alt="Client Photo" className="img-fluid" />
                <h3>Client Name</h3>
                <p>Feedback goes here.</p>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
      
      <footer className="bg-light text-center p-3">
        <div>
          <Navbar.Brand href="#">Social Media Icons</Navbar.Brand>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
