import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ApplyNow() {
  const { state } = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: '',
  });

  const [jobData, setJobData] = useState(null);

  useEffect(() => {
    if (state?.job) {
      setJobData(state.job);  // Set job data from the state
    }
  }, [state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.resume) {
      alert('Please upload your resume!');
      return;
    }
    console.log('Form Data:', formData);
    alert('Application submitted successfully!');
  };

  if (!jobData) return null; // Don't render anything if jobData is null

  return (
    <div className="apply-now-container">
      <h1 className="page-title">Apply for the Job: {jobData.title}</h1>
      
      <form className="apply-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="resume">Upload Resume</label>
          <input
            type="file"
            id="resume"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="coverLetter">Cover Letter</label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            placeholder="Write a brief cover letter"
          />
        </div>
        <button type="submit" className="submit-btn">
          Submit Application
        </button>
      </form>
    </div>
  );
}

export default ApplyNow;
