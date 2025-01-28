import React, { useState } from 'react';
import { Button, Container, ListGroup, Image, Modal, Form } from 'react-bootstrap';

function StudentProfilePage() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [bio, setBio] = useState('Student bio goes here.');
  const [profilePicture, setProfilePicture] = useState('profile-picture.jpg');

  const handleSaveChanges = () => {
    // Logic to save changes (e.g., send data to server)
    setShowEditModal(false);
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePicture(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveProfilePicture = () => {
    setProfilePicture(null);
  };

  return (
    <Container className="mt-5">
      <h2>Student Profile</h2>
      <section className="text-center mb-4">
        {profilePicture ? (
          <Image src={profilePicture} roundedCircle width={100} height={100} />
        ) : (
          <div style={{ width: 100, height: 100, borderRadius: '50%', backgroundColor: '#ddd', display: 'inline-block' }} />
        )}
        <p>Bio: {bio}</p>
        <p>Contact Information: student@example.com</p>
      </section>
      <section>
        <h3>My Courses</h3>
        <ListGroup>
          <ListGroup.Item>Course 1 - 50% complete</ListGroup.Item>
          <ListGroup.Item>Course 2 - 70% complete</ListGroup.Item>
        </ListGroup>
      </section>
      <section>
        <h3>Completed Projects</h3>
        <ListGroup>
          <ListGroup.Item>Project 1</ListGroup.Item>
          <ListGroup.Item>Project 2</ListGroup.Item>
        </ListGroup>
      </section>
      <section>
        <h3>Skills</h3>
        <ListGroup>
          <ListGroup.Item>Skill 1</ListGroup.Item>
          <ListGroup.Item>Skill 2</ListGroup.Item>
        </ListGroup>
      </section>
      <section>
        <h3>Reviews from Clients</h3>
        <ListGroup>
          <ListGroup.Item>⭐⭐⭐⭐⭐ - Excellent work!</ListGroup.Item>
          <ListGroup.Item>⭐⭐⭐⭐ - Good job.</ListGroup.Item>
        </ListGroup>
      </section>
      <section className="mt-4">
        <Button variant="primary" onClick={() => setShowEditModal(true)}>Edit Profile</Button>
      </section>

      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Bio</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleProfilePictureChange}
              />
              {profilePicture && (
                <div className="mt-3 text-center">
                  <Image src={profilePicture} roundedCircle width={100} height={100} />
                  <Button variant="danger" className="mt-2" onClick={handleRemoveProfilePicture}>
                    Remove Profile Picture
                  </Button>
                </div>
              )}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default StudentProfilePage;
