import React from 'react';

const CourseOverviewPage = () => {
  return (
    <div>
      <h2>Course Title</h2>
      <p>Brief description of the course.</p>
      <video controls>
        <source src="promo-video.mp4" type="video/mp4" />
      </video>
      <section className="course-curriculum">
        <h3>Course Curriculum</h3>
        <div className="module">
          <h4>Module Title</h4>
          <p>Lesson details</p>
        </div>
      </section>
      <section className="instructor-profile">
        <h3>Instructor</h3>
        <p>Instructor bio</p>
      </section>
      <section className="student-reviews">
        <h3>Student Reviews</h3>
        <div className="review">
          <p>Review comment</p>
          <p>Star rating</p>
        </div>
      </section>
      <div className="enrollment-options">
        <p>Pricing information</p>
        <button>Enroll Now</button>
        <button>Request More Information</button>
      </div>
    </div>
  );
};

export default CourseOverviewPage;

