import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

function ProjectList({ projects, onEditProject }) {
  return (
    <ListGroup className="mt-3">
      {projects.map(project => (
        <ListGroup.Item key={project.id}>
          {project.name} ({project.description})
          <Button variant="secondary" className="ms-2" onClick={() => onEditProject(project)}>Edit</Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default ProjectList;
