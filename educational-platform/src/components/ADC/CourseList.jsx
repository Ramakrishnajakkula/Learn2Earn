import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

function CourseList({ courses, onEditCourse }) {
  return (
    <ListGroup className="mt-3">
      {courses.map(course => (
        <ListGroup.Item key={course.id}>
          {course.name} ({course.description})
          <Button variant="secondary" className="ms-2" onClick={() => onEditCourse(course)}>Edit</Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default CourseList;
