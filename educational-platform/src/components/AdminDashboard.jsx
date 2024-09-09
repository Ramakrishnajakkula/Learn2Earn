import React, { useState, useEffect } from 'react';
import { Button, Container, ListGroup, Card } from 'react-bootstrap';
import UserList from './ADC/UserList';
import EditUserModal from './ADC/EditUserModal';
import { fetchUsers, updateUser } from './ADC/Api';

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    // Fetch users from API or database
    fetchUsers()
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleEditUser = user => {
    setSelectedUser(user);
    setShowEditModal(true);
  };

  const handleSaveUser = updatedUser => {
    updateUser(updatedUser)
      .then(data => {
        // Update user in state
        setUsers(users.map(user => (user.id === data.id ? data : user)));
        setShowEditModal(false);
      })
      .catch(error => console.error('Error updating user:', error));
  };

  return (
    <Container className="mt-5">
      <h2>Admin Dashboard</h2>
      <section className="mb-4">
        <h3>Key Metrics</h3>
        <Card>
          <Card.Body>
            <Card.Text>Total Students: 100</Card.Text>
            <Card.Text>Active Courses: 10</Card.Text>
            <Card.Text>Pending Projects: 5</Card.Text>
            <Card.Text>Client Satisfaction: 90%</Card.Text>
          </Card.Body>
        </Card>
      </section>
      <section className="mb-4">
        <h3>User Management</h3>
        <Button variant="primary" onClick={() => setShowUsers(!showUsers)}>Manage Users</Button>
        {showUsers && (
          <UserList users={users} onEditUser={handleEditUser} />
        )}
      </section>
      <section className="mb-4">
        <h3>Course Management</h3>
        <Button variant="primary">Manage Courses</Button>
      </section>
      <section className="mb-4">
        <h3>Project Allocation</h3>
        <Button variant="primary">Allocate Projects</Button>
      </section>
      <section className="mb-4">
        <h3>Analytics</h3>
        <Button variant="primary">View Analytics</Button>
      </section>
      <section className="mb-4">
        <h3>Quick Access</h3>
        <Button variant="secondary" className="me-2">Add New Course</Button>
        <Button variant="secondary">Approve Project</Button>
      </section>

      {selectedUser && (
        <EditUserModal
          show={showEditModal}
          user={selectedUser}
          onSaveUser={handleSaveUser}
          onHide={() => setShowEditModal(false)}
        />
      )}
    </Container>
  );
}

export default AdminDashboard;
