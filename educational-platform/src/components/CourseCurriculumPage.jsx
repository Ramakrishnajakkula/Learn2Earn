import React from 'react';
import { Button, Container, ListGroup } from 'react-bootstrap';

function CourseCurriculumPage() {
  return (
    <Container className="mt-5">
      <h2>Course Curriculum</h2>
      <ListGroup>
        <ListGroup.Item>
          Module 1: Introduction
          <ListGroup className="ms-3">
            <ListGroup.Item>Lesson 1.1: Basics</ListGroup.Item>
            <ListGroup.Item>Lesson 1.2: Overview</ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
        <ListGroup.Item>
          Module 2: Advanced Techniques
          <ListGroup className="ms-3">
            <ListGroup.Item>Lesson 2.1: Techniques</ListGroup.Item>
            <ListGroup.Item>Lesson 2.2: Practice</ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
      <div className="mt-4">
        <Button variant="secondary" className="me-2">Previous</Button>
        <Button variant="secondary">Next</Button>
      </div>
    </Container>
  );
}

export default CourseCurriculumPage;
