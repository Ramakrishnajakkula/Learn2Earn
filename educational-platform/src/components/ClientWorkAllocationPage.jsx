import React from 'react';
import { Button, Container, Card, ListGroup } from 'react-bootstrap';

function ClientWorkAllocationPage() {
  return (
    <Container className="mt-5">
      <h2>Available Projects</h2>
      <section>
        <Card>
          <Card.Body>
            <Card.Title>Project 1</Card.Title>
            <Card.Text>
              Client: ABC Corp<br />
              Deadline: Tomorrow
            </Card.Text>
            <Button variant="primary" className="me-2">Accept Project</Button>
            <Button variant="secondary">View Details</Button>
          </Card.Body>
        </Card>
        <Card className="mt-3">
          <Card.Body>
            <Card.Title>Project 2</Card.Title>
            <Card.Text>
              Client: XYZ Inc<br />
              Deadline: Next Week
            </Card.Text>
            <Button variant="primary" className="me-2">Accept Project</Button>
            <Button variant="secondary">View Details</Button>
          </Card.Body>
        </Card>
      </section>
      <section className="mt-4">
        <h3>Filters</h3>
        <Button variant="outline-secondary" className="me-2">Sort by Deadline</Button>
        <Button variant="outline-secondary" className="me-2">Sort by Complexity</Button>
        <Button variant="outline-secondary">Sort by Client Rating</Button>
      </section>
    </Container>
  );
}

export default ClientWorkAllocationPage;
