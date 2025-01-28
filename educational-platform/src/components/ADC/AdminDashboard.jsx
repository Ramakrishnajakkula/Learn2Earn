import React, { useState, useEffect } from 'react';
import { Button, Container, Card } from 'react-bootstrap';
import UserList from './UserList';
import EditUserModal from './EditUserModal';
import CourseList from './CourseList';
import EditCourseModal from './EditCourseModal';
import AddCourseModal from './AddCourseModal';
import ProjectList from './ProjectList';
import EditProjectModal from './EditProjectModal';
import AnalyticsView from './AnalyticsView';
import QuickAccess from './QuickAccess';
import { fetchUsers, updateUser, fetchCourses, updateCourse, addCourse, fetchProjects, updateProject, fetchAnalytics } from './Api';

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [projects, setProjects] = useState([]);
  const [analytics, setAnalytics] = useState({});
  const [showUsers, setShowUsers] = useState(false);
  const [showCourses, setShowCourses] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [showEditUserModal, setShowEditUserModal] = useState(false);
  const [showEditCourseModal, setShowEditCourseModal] = useState(false);
  const [showAddCourseModal, setShowAddCourseModal] = useState(false);
  const [showEditProjectModal, setShowEditProjectModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetchUsers()
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));

    fetchCourses()
      .then(data => setCourses(data))
      .catch(error => console.error('Error fetching courses:', error));

    fetchProjects()
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects:', error));

    fetchAnalytics()
      .then(data => setAnalytics(data))
      .catch(error => console.error('Error fetching analytics:', error));
  }, []);

  const handleEditUser = user => {
    setSelectedUser(user);
    setShowEditUserModal(true);
  };

  const handleSaveUser = updatedUser => {
    updateUser(updatedUser)
      .then(data => {
        setUsers(users.map(user => (user.id === data.id ? data : user)));
        setShowEditUserModal(false);
      })
      .catch(error => console.error('Error updating user:', error));
  };

  const handleEditCourse = course => {
    setSelectedCourse(course);
    setShowEditCourseModal(true);
  };

  const handleSaveCourse = updatedCourse => {
    updateCourse(updatedCourse)
      .then(data => {
        setCourses(courses.map(course => (course.id === data.id ? data : course)));
        setShowEditCourseModal(false);
      })
      .catch(error => console.error('Error updating course:', error));
  };

  const handleAddCourse = newCourse => {
    addCourse(newCourse)
      .then(data => {
        setCourses([...courses, data]);
        setShowAddCourseModal(false);
      })
      .catch(error => console.error('Error adding course:', error));
  };

  const handleEditProject = project => {
    setSelectedProject(project);
    setShowEditProjectModal(true);
  };

  const handleSaveProject = updatedProject => {
    updateProject(updatedProject)
      .then(data => {
        setProjects(projects.map(project => (project.id === data.id ? data : project)));
        setShowEditProjectModal(false);
      })
      .catch(error => console.error('Error updating project:', error));
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
        <Button variant="primary" onClick={() => setShowCourses(!showCourses)}>Manage Courses</Button>
        {showCourses && (
          <CourseList courses={courses} onEditCourse={handleEditCourse} />
        )}
      </section>
      <section className="mb-4">
        <h3>Project Allocation</h3>
        <Button variant="primary" onClick={() => setShowProjects(!showProjects)}>Allocate Projects</Button>
        {showProjects && (
          <ProjectList projects={projects} onEditProject={handleEditProject} />
        )}
      </section>
      <section className="mb-4">
        <h3>Analytics</h3>
        <Button variant="primary" onClick={() => setShowAnalytics(!showAnalytics)}>View Analytics</Button>
        {showAnalytics && (
          <AnalyticsView analytics={analytics} />
        )}
      </section>
      <section className="mb-4">
        <h3>Quick Access</h3>
        <QuickAccess onAddCourseClick={() => setShowAddCourseModal(true)} />
      </section>

      {selectedUser && (
        <EditUserModal
          show={showEditUserModal}
          user={selectedUser}
          onSaveUser={handleSaveUser}
          onHide={() => setShowEditUserModal(false)}
        />
      )}

      {selectedCourse && (
        <EditCourseModal
          show={showEditCourseModal}
          course={selectedCourse}
          onSaveCourse={handleSaveCourse}
          onHide={() => setShowEditCourseModal(false)}
        />
      )}

      {selectedProject && (
        <EditProjectModal
          show={showEditProjectModal}
          project={selectedProject}
          onSaveProject={handleSaveProject}
          onHide={() => setShowEditProjectModal(false)}
        />
      )}

      <AddCourseModal
        show={showAddCourseModal}
        onSaveCourse={handleAddCourse}
        onHide={() => setShowAddCourseModal(false)}
      />
    </Container>
  );
}

export default AdminDashboard;
