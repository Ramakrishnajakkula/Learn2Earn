import React from 'react';
import { Button, Container, ListGroup } from 'react-bootstrap';

function ClientProjectBriefPage() {
  return (
    <Container className="mt-5">
      <h2>Project Brief</h2>
      <section className="mb-4">
        <h3>Project Title</h3>
        <p>Client Requirements: Complete the following tasks...</p>
        <p>Deadline: Tomorrow</p>
      </section>
      <section className="mb-4">
        <h3>Resources Provided</h3>
        <a href="assets.zip" className="btn btn-link">Download Assets</a>
      </section>
      <section className="mb-4">
        <h3>Communication Logs</h3>
        <ListGroup>
          <ListGroup.Item>Message from Client: Please ensure...</ListGroup.Item>
          <ListGroup.Item>Reply from Student: Understood...</ListGroup.Item>
        </ListGroup>
      </section>
      <section>
        <Button variant="primary" className="me-2">Ask a Question</Button>
        <Button variant="success" className="me-2">Submit Work</Button>
        <Button variant="warning">Request Extension</Button>
      </section>
    </Container>
  );
}

export default ClientProjectBriefPage;
