import React from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';

function CourseOverviewPage() {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={8}>
          <h2>Course Title</h2>
          <p>Brief description of the course.</p>
          <video controls className="w-100 mb-4">
            <source src="promotional-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h3>Course Curriculum</h3>
          <ul>
            <li>Module 1: Introduction</li>
            <li>Module 2: Advanced Techniques</li>
          </ul>
          <h3>Instructor Profile</h3>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="instructor-photo.jpg" />
            <Card.Body>
              <Card.Text>
                Instructor bio goes here.
              </Card.Text>
            </Card.Body>
          </Card>
          <h3>Student Reviews</h3>
          <div>
            <span>⭐⭐⭐⭐⭐</span>
            <p>Great course! Learned a lot.</p>
          </div>
          <h3>Enrollment Options</h3>
          <p>Price: $100</p>
          <Button variant="primary">Enroll Now</Button>
          <Button variant="secondary" className="ms-2">Request More Information</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default CourseOverviewPage;
