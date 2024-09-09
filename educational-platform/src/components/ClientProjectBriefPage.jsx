import React, { useState } from 'react';
import { Button, Container, ListGroup, Form, InputGroup, Modal } from 'react-bootstrap';

function ClientProjectBriefPage() {
  const [messages, setMessages] = useState([
    { from: 'client', text: 'Please ensure the project meets all requirements.' },
    { from: 'student', text: 'Understood. I will make sure to follow all instructions.' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [showExtensionModal, setShowExtensionModal] = useState(false);
  const [workDetails, setWorkDetails] = useState('');
  const [extensionReason, setExtensionReason] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { from: 'student', text: newMessage }]);
      setNewMessage('');
    }
  };

  const handleSubmitWork = () => {
    console.log('Work submitted:', workDetails);
    alert('Work submitted successfully!');
    setShowSubmitModal(false);
  };

  const handleRequestExtension = () => {
    console.log('Extension requested:', extensionReason);
    alert('Extension request submitted successfully!');
    setShowExtensionModal(false);
  };

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
          {messages.map((message, index) => (
            <ListGroup.Item key={index}>
              <strong>{message.from === 'client' ? 'Client' : 'Student'}:</strong> {message.text}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </section>
      <section className="mb-4">
        <h3>Send a Message</h3>
        <InputGroup>
          <Form.Control
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <Button variant="primary" onClick={handleSendMessage}>Send</Button>
        </InputGroup>
      </section>
      <section>
        <Button variant="success" className="me-2" onClick={() => setShowSubmitModal(true)}>Submit Work</Button>
        <Button variant="warning" onClick={() => setShowExtensionModal(true)}>Request Extension</Button>
      </section>

      <Modal show={showSubmitModal} onHide={() => setShowSubmitModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Submit Work</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Work Details</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={workDetails}
                onChange={(e) => setWorkDetails(e.target.value)}
                placeholder="Describe the work you are submitting..."
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Upload Files</Form.Label>
              <Form.Control type="file" multiple />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowSubmitModal(false)}>Close</Button>
          <Button variant="primary" onClick={handleSubmitWork}>Submit Work</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showExtensionModal} onHide={() => setShowExtensionModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Request Extension</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Reason for Extension</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={extensionReason}
                onChange={(e) => setExtensionReason(e.target.value)}
                placeholder="Explain why you need an extension..."
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowExtensionModal(false)}>Close</Button>
          <Button variant="primary" onClick={handleRequestExtension}>Request Extension</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default ClientProjectBriefPage;
