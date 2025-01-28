import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

function UserList({ users, onEditUser }) {
  return (
    <ListGroup className="mt-3">
      {users.map(user => (
        <ListGroup.Item key={user.id}>
          {user.name} ({user.email})
          <Button variant="secondary" className="ms-2" onClick={() => onEditUser(user)}>Edit</Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default UserList;
