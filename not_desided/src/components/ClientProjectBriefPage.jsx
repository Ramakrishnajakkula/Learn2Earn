import React from 'react';

const ClientProjectBriefPage = () => {
  return (
    <div>
      <h2>Project Overview</h2>
      <section className="project-details">
        <h3>Project Title</h3>
        <p>Client requirements</p>
        <p>Submission deadline</p>
      </section>
      <section className="resources">
        <h3>Resources Provided</h3>
        <a href="#resource-download">Download link</a>
      </section>
      <section className="communication-logs">
        <h3>Communication Logs</h3>
        <p>Messages between client and student</p>
      </section>
      <div className="actions">
        <button>Ask a Question</button>
        <button>Submit Work</button>
        <button>Request Extension</button>
      </div>
    </div>
  );
};

export default ClientProjectBriefPage;
