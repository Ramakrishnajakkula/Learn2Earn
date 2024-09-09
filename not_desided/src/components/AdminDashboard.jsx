import React from 'react';

const AdminDashboard = () => {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <section className="key-metrics">
        <div className="metric">
          <h3>Total Students</h3>
          <p>Number</p>
        </div>
        <div className="metric">
          <h3>Active Courses</h3>
          <p>Number</p>
        </div>
        <div className="metric">
          <h3>Pending Projects</h3>
          <p>Number</p>
        </div>
        <div className="metric">
          <h3>Client Satisfaction</h3>
          <p>Rating</p>
        </div>
      </section>
      <section className="user-management">
        <h3>User Management</h3>
        <button>Manage Users</button>
      </section>
      <section className="course-management">
        <h3>Course Management</h3>
        <button>Manage Courses</button>
      </section>
      <section className="project-allocation">
        <h3>Project Allocation</h3>
        <button>Allocate Projects</button>
      </section>
      <section className="analytics">
        <h3>Analytics</h3>
        <button>View Analytics</button>
      </section>
    </div>
  );
};

export default AdminDashboard;
