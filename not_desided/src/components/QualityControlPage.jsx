import React from 'react';

const QualityControlPage = () => {
  return (
    <div>
      <h2>Quality Control</h2>
      <video controls>
        <source src="submitted-video.mp4" type="video/mp4" />
      </video>
      <section className="quality-checklist">
        <h3>Quality Criteria</h3>
        <ul>
          <li>Video Quality</li>
          <li>Adherence to Brief</li>
          <li>Creativity</li>
        </ul>
      </section>
      <textarea placeholder="Reviewer Comments"></textarea>
      <div className="actions">
        <button>Approve</button>
        <button>Request Revisions</button>
        <button>Reject</button>
      </div>
    </div>
  );
};

export default QualityControlPage;
