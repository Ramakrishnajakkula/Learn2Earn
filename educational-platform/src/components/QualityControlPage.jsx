import React from 'react';
import { Button, Container, Form, ProgressBar, Card } from 'react-bootstrap';

function QualityControlPage() {
  return (
    <Container className="mt-5">
      <h2>Quality Control</h2>
      <section className="mb-4">
        <h3>Submitted Video</h3>
        <video controls className="w-100">
          <source src="submitted-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
      <section className="mb-4">
        <h3>Quality Checklist</h3>
        <Form>
          <Form.Check type="checkbox" label="Video Quality" />
          <Form.Check type="checkbox" label="Adherence to Brief" />
          <Form.Check type="checkbox" label="Creativity" />
        </Form>
      </section>
      <section className="mb-4">
        <h3>Reviewer Comments</h3>
        <Form.Control as="textarea" rows={3} />
      </section>
      <section>
        <Button variant="success" className="me-2">Approve</Button>
        <Button variant="warning" className="me-2">Request Revisions</Button>
        <Button variant="danger">Reject</Button>
      </section>
    </Container>
  );
}

export default QualityControlPage;
