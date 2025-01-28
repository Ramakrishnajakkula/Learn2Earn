import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function EditProjectModal({ show, project, onSaveProject, onHide }) {
  const [projectInfo, setProjectInfo] = useState({ ...project });

  const handleSave = () => {
    onSaveProject(projectInfo);
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Project</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={projectInfo.name}
              onChange={e => setProjectInfo({ ...projectInfo, name: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              value={projectInfo.description}
              onChange={e => setProjectInfo({ ...projectInfo, description: e.target.value })}
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

export default EditProjectModal;
