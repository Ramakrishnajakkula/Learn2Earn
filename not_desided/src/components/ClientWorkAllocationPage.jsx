import React from 'react';

const ClientWorkAllocationPage = () => {
  return (
    <div>
      <h2>Client Work Allocation</h2>
      <section className="available-projects">
        <div className="project">
          <h3>Project Title</h3>
          <p>Client Name</p>
          <p>Deadline</p>
          <p>Brief description</p>
          <button>Accept Project</button>
          <button>View Details</button>
        </div>
      </section>
      <div className="filters">
        <button>Sort by Deadline</button>
        <button>Sort by Complexity</button>
        <button>Sort by Client Rating</button>
      </div>
    </div>
  );
};

export default ClientWorkAllocationPage;

