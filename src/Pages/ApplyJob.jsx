import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { assets } from '../assets/assets';
import kconvert from "k-convert";
import moment from "moment";

function ApplyJob() {
  const { state } = useLocation();
  const [jobData, setJobData] = useState(null);

 

  useEffect(() => {
    if (state?.job) {
      setJobData(state.job); 
    }
  }, [state]);

  if (!jobData) {
    return <div className="loading">Loading job details...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="apply-job-container">
        <div className="job-header">
          <div className="company-info">
            <img className="company-logo" src={jobData.companyId.image} alt="Company Logo" />
            <div className="job-info">
              <h1 className="job-title">{jobData.title}</h1>
              <div className="job-details">
                <span className="company-name">
                  <img className="icon" src={assets.suitcase_icon} alt="Company Icon" />
                  {jobData.companyId.name}
                </span>
                <span className="job-location">
                  <img className="icon" src={assets.location_icon} alt="Location Icon" />
                  {jobData.location}
                </span>
                <span className="job-level">
                  <img className="icon" src={assets.person_icon} alt="Level Icon" />
                  {jobData.level}
                </span>
                <span className="salary">
                  <img className="icon" src={assets.money_icon} alt="Money Icon" />
                  CTC : {kconvert.convertTo(jobData.salary)}
                </span>
              </div>
            </div>
          </div>
          <div className="apply-now-section">
            <button className="apply-now-btn">Apply Now</button>
            <p className="job-posted-time">Posted {moment(jobData.date).fromNow()}</p>
          </div>
        </div>
        
        <div className="job-description-section">
          <h2 className="description-title">Job Description</h2>
          <div className="job-description" dangerouslySetInnerHTML={{ __html: jobData.description }}></div>
          <button className="apply-now-btn">Apply Now</button>
        </div>
      </div>
    </>
  );
}

export default ApplyJob;
