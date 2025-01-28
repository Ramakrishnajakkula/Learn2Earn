import React from 'react';

const StudentDashboard = () => {
  return (
    <div>
      <section className="profile">
        <img src="profile-pic.jpg" alt="Profile" />
        <h3>Student Name</h3>
        <p>Short bio</p>
      </section>
      <section className="progress-summary">
        <h3>Progress Summary</h3>
        <div className="course-progress">
          <h4>Course Title</h4>
          <progress value="50" max="100">50%</progress>
        </div>
      </section>
      <section className="my-courses">
        <h3>My Courses</h3>
        <div className="course">
          <h4>Course Title</h4>
          <progress value="75" max="100">75%</progress>
        </div>
      </section>
      <section className="upcoming-assignments">
        <h3>Upcoming Assignments</h3>
        <div className="assignment">
          <p>Assignment details</p>
          <p>Deadline</p>
        </div>
      </section>
      <section className="recent-activity">
        <h3>Recent Activity</h3>
        <p>Details of recent interactions and submissions</p>
      </section>
      <section className="messages">
        <h3>Messages</h3>
        <div className="message">
          <p>Message content</p>
        </div>
      </section>
    </div>
  );
};

export default StudentDashboard;

