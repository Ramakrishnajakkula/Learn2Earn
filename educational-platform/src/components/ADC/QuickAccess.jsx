import React from 'react';
import { Button } from 'react-bootstrap';

function QuickAccess({ onAddCourseClick }) {
  return (
    <div className="mt-3">
      <Button variant="secondary" className="me-2" onClick={onAddCourseClick}>Add New Course</Button>
      <Button variant="secondary">Approve Project</Button>
    </div>
  );
}

export default QuickAccess;
