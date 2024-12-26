import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

function Jobcard({ job }) {
  const navigate = useNavigate();

  
  const truncatedDescription = job.description.length > 150
    ? job.description.slice(0, 150) + '...'
    : job.description;

  
  const descriptionHtml = { __html: truncatedDescription };

  
  const handleNavigation = (e, jobId) => {
    navigate(`/apply-job/${jobId}`, { state: { job } });
    window.scrollTo(0, 0);
  };

  return (
    <div className="job-card">
      <div className="company-icon">
        <img src={assets.company_icon} alt="Company Logo" />
      </div>
      <h4 className="job-title">{job.title}</h4>
      <div className="job-details">
        <span className="job-location">{job.location}</span>
        <span className="job-level">{job.level}</span>
      </div>
      
      <p className="job-description" dangerouslySetInnerHTML={descriptionHtml} />
      <div className="job-actions">
        <button 
          onClick={(e) => handleNavigation(e, job._id)} 
          className="apply-now"
        >
          Apply Now
        </button>
        <button 
          onClick={(e) => handleNavigation(e, job._id)} 
          className="learn-more"
        >
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Jobcard;
