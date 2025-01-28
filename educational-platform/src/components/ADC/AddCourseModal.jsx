import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function AddCourseModal({ show, onSaveCourse, onHide }) {
  const [courseTitle, setCourseTitle] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [courseVideoSeries, setCourseVideoSeries] = useState('');

  const handleSave = () => {
    const newCourse = {
      title: courseTitle,
      description: courseDescription,
      videoSeries: courseVideoSeries.split(',').map(video => video.trim()),
    };
    onSaveCourse(newCourse);
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Course</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Course Title</Form.Label>
            <Form.Control
              type="text"
              value={courseTitle}
              onChange={e => setCourseTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Course Description</Form.Label>
            <Form.Control
              type="text"
              value={courseDescription}
              onChange={e => setCourseDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Course Video Series</Form.Label>
            <Form.Control
              type="text"
              value={courseVideoSeries}
              onChange={e => setCourseVideoSeries(e.target.value)}
              placeholder="Enter video URLs separated by commas"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save Course
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddCourseModal;
