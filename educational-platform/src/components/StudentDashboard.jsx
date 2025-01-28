import React from 'react';
import { Button, Container, ListGroup, ProgressBar, Image } from 'react-bootstrap';

function StudentDashboard() {
  return (
    <Container className="mt-5">
      <h2>Student Dashboard</h2>
      <section className="text-center mb-4">
        <Image src="profile-picture.jpg" roundedCircle />
        <p>Name: John Doe</p>
        <p>Short bio goes here.</p>
      </section>
      <section>
        <h3>Progress Summary</h3>
        <div>
          <p>Course 1: 50% complete</p>
          <ProgressBar now={50} />
        </div>
        <div className="mt-3">
          <p>Course 2: 70% complete</p>
          <ProgressBar now={70} />
        </div>
      </section>
      <section>
        <h3>My Courses</h3>
        <ListGroup>
          <ListGroup.Item>Course 1</ListGroup.Item>
          <ListGroup.Item>Course 2</ListGroup.Item>
        </ListGroup>
      </section>
      <section>
        <h3>Upcoming Assignments</h3>
        <ListGroup>
          <ListGroup.Item>Assignment 1 - Due: Tomorrow</ListGroup.Item>
          <ListGroup.Item>Assignment 2 - Due: Next Week</ListGroup.Item>
        </ListGroup>
      </section>
      <section>
        <h3>Recent Activity</h3>
        <ListGroup>
          <ListGroup.Item>Completed Lesson 2.1</ListGroup.Item>
          <ListGroup.Item>Submitted Assignment 1</ListGroup.Item>
        </ListGroup>
      </section>
      <section>
        <h3>Messages</h3>
        <ListGroup>
          <ListGroup.Item>Message from Instructor</ListGroup.Item>
          <ListGroup.Item>Notification: New Course Available</ListGroup.Item>
        </ListGroup>
      </section>
    </Container>
  );
}

export default StudentDashboard;
