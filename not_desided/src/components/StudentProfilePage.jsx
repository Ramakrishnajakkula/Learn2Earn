import React from 'react';

const StudentProfilePage = () => {
  return (
    <div>
      <h2>Student Profile</h2>
      <section className="profile-info">
        <img src="profile-pic.jpg" alt="Profile" />
        <h3>Student Name</h3>
        <p>Bio</p>
        <p>Contact information</p>
      </section>
      <section className="my-courses">
        <h3>My Courses</h3>
        <div className="course">
          <h4>Course Title</h4>
          <progress value="75" max="100">75%</progress>
        </div>
      </section>
      <section className="completed-projects">
        <h3>Completed Projects</h3>
        <div className="project">
          <h4>Project Title</h4>
        </div>
      </section>
      <section className="skills">
        <h3>Skills</h3>
        <ul>
          <li>Skill 1</li>
          <li>Skill 2</li>
        </ul>
      </section>
      <section className="reviews">
        <h3>Reviews from Clients</h3>
        <div className="review">
          <p>Review comment</p>
          <p>Star rating</p>
        </div>
      </section>
      <button>Edit Profile</button>
    </div>
  );
};

export default StudentProfilePage;
