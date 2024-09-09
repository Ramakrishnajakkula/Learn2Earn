import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function EditCourseModal({ show, course, onSaveCourse, onHide }) {
  const [courseInfo, setCourseInfo] = useState({ ...course });

  const handleSave = () => {
    onSaveCourse(courseInfo);
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Course</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={courseInfo.name}
              onChange={e => setCourseInfo({ ...courseInfo, name: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              value={courseInfo.description}
              onChange={e => setCourseInfo({ ...courseInfo, description: e.target.value })}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditCourseModal;
