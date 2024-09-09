import React, { useState } from 'react';
import { Button, Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // Import custom CSS for sidebar styling
import logo from '../assets/Designer (2).png'; // Import logo

function HomePage() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleGetStarted = () => {
    navigate('/login');
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleCourseClick = (courseId) => {
    navigate(`/course/${courseId}`);
  };

  return (
    <div className="home-page">
      <Navbar bg="light" expand="lg">
        <Container>
          <Button variant="outline-secondary" onClick={toggleSidebar} className="mr-3">
            ☰
          </Button>
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <img src={logo} alt="Logo" width="30" height="30" className="d-inline-block align-top mr-2" />{' '}
            <span className="brand-text">Educational Platform</span>
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            <Nav.Link href="/privacy">Privacy Policy</Nav.Link>
            <Nav.Link href="/terms">Terms of Service</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-content">
        <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="/student-dashboard">Student Dashboard</a></li>
            <li><a href="/assignment-submission">Assignment Submission</a></li>
            <li><a href="/client-work-alloc">Client Work Allocation</a></li>
            <li><a href="/client-project-brief">Client Project Brief</a></li>
            <li><a href="/student-profile">Student Profile</a></li>
          </ul>
        </aside>

        <main className="content">
          <header className="text-center mt-5 mb-4">
            <h1>Welcome to Our Educational Platform</h1>
            <Button variant="primary" onClick={handleGetStarted}>Get Started</Button>
          </header>

          <Container fluid>
            <section className="text-center mb-5">
              <h2>Our Courses</h2>
              <Row>
                <Col md={4} onClick={() => handleCourseClick(1)}>
                  <div className="course-card">
                    <img src="course-thumbnail.jpg" alt="Course Thumbnail" className="img-fluid" />
                    <h3>Course Title 1</h3>
                    <p>Course description goes here.</p>
                  </div>
                </Col>
                <Col md={4} onClick={() => handleCourseClick(2)}>
                  <div className="course-card">
                    <img src="course-thumbnail.jpg" alt="Course Thumbnail" className="img-fluid" />
                    <h3>Course Title 2</h3>
                    <p>Course description goes here.</p>
                  </div>
                </Col>
                <Col md={4} onClick={() => handleCourseClick(3)}>
                  <div className="course-card">
                    <img src="course-thumbnail.jpg" alt="Course Thumbnail" className="img-fluid" />
                    <h3>Course Title 3</h3>
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
                  <div className="testimonial-card">
                    <img src="student-photo.jpg" alt="Student Photo" className="img-fluid" />
                    <h3>Student Name</h3>
                    <p>Success story goes here.</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="testimonial-card">
                    <img src="student-photo.jpg" alt="Student Photo" className="img-fluid" />
                    <h3>Student Name</h3>
                    <p>Success story goes here.</p>
                  </div>
                </Col>
                <Col md={4}>
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
                  <div className="testimonial-card">
                    <img src="client-photo.jpg" alt="Client Photo" className="img-fluid" />
                    <h3>Client Name</h3>
                    <p>Feedback goes here.</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="testimonial-card">
                    <img src="client-photo.jpg" alt="Client Photo" className="img-fluid" />
                    <h3>Client Name</h3>
                    <p>Feedback goes here.</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="testimonial-card">
                    <img src="client-photo.jpg" alt="Client Photo" className="img-fluid" />
                    <h3>Client Name</h3>
                    <p>Feedback goes here.</p>
                  </div>
                </Col>
              </Row>
            </section>
          </Container>
        </main>
      </div>

      <footer className="bg-light text-center p-3">
        <div>
          <Navbar.Brand href="#">Social Media Icons</Navbar.Brand>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
