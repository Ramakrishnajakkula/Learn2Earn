import React from 'react';
import { Button, Container, Form, ProgressBar } from 'react-bootstrap';

function AssignmentSubmissionPage() {
  return (
    <Container className="mt-5">
      <h2>Submit Assignment</h2>
      <section className="mb-4">
        <h3>Assignment Details</h3>
        <p>Instructions: Complete the following tasks...</p>
        <p>Deadline: Tomorrow</p>
      </section>
      <section className="mb-4">
        <h3>Submission Form</h3>
        <Form>
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter title" />
          </Form.Group>
          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Enter description" />
          </Form.Group>
          <Form.Group controlId="formFile">
            <Form.Label>Upload File</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3">
            Submit
          </Button>
        </Form>
      </section>
      <section className="mb-4">
        <h3>Progress Tracker</h3>
        <ProgressBar now={0} />
      </section>
      <section>
        <h3>Confirmation Message</h3>
        <p>Your assignment has been successfully submitted!</p>
      </section>
    </Container>
  );
}

export default AssignmentSubmissionPage;
