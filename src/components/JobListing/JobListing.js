// import React from 'react';
// import './JobListing.css';

// const JobListing = ({ jobs }) => {
//   return (
//     <section className="job-listing">
//       {jobs.map(job => (
//         <div key={job.id} className="job">
//           <h2>{job.title}</h2>
//           <p>{job.company}</p>
//           <p>{job.location}</p>
//           <p>{job.description}</p>
//           <button>Apply</button>
//         </div>
//       ))}
//     </section>
//   );
// };

// export default JobListing;
import React, { useRef } from 'react';
import './JobListing.css';

const JobListing = ({ jobs }) => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({
      left: -200,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({
      left: 200,
      behavior: 'smooth',
    });
  };

  return (
    <div className="job-listing-container">
      <div ref={containerRef} className="job-listing">
        {jobs.map((job, index) => (
          <div key={index} className="job">
            <h2>{job.title}</h2>
            <p>{job.company}</p>
            <p>{job.location}</p>
            <p>{job.description}</p>
            <button>Apply</button>
          </div>
        ))}
      </div>
      <div className="scroll-button left" onClick={scrollLeft}>
        &lt; {/* Left arrow */}
      </div>
      <div className="scroll-button right" onClick={scrollRight}>
        &gt; {/* Right arrow */}
      </div>
    </div>
  );
};

export default JobListing;
