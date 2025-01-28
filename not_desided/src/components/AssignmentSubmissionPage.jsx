import React from 'react';

const AssignmentSubmissionPage = () => {
  return (
    <div>
      <h2>Assignment Submission</h2>
      <section className="assignment-details">
        <p>Assignment instructions</p>
        <p>Submission deadline</p>
      </section>
      <form className="submission-form">
        <input type="file" />
        <input type="text" placeholder="Title" />
        <textarea placeholder="Description"></textarea>
        <textarea placeholder="Notes"></textarea>
        <button>Submit</button>
      </form>
      <progress value="0" max="100">0%</progress>
      <p>Submission successful message</p>
    </div>
  );
};

export default AssignmentSubmissionPage;
