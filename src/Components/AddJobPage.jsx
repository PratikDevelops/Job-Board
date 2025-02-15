import React, { useState } from "react";

const AddJobPage = () => {
  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    description: "",
    jobType: "",
    deadline: "",
    remote: false,
    skills: "",
    benefits: "",
    logo: null,
  });

  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setJob((prevJob) => ({
      ...prevJob,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    setJob((prevJob) => ({
      ...prevJob,
      logo: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!job.title || !job.company || !job.location || !job.description || !job.jobType) {
      setError("Please fill out all required fields.");
      return;
    }

    setError(""); 
    console.log("Job Submitted:", job);

    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);

    setJob({
      title: "",
      company: "",
      location: "",
      salary: "",
      description: "",
      jobType: "",
      deadline: "",
      remote: false,
      skills: "",
      benefits: "",
      logo: null,
    });
  };

  return (
    <div style={styles.container}>
      {showToast && <div style={styles.toast}>✅ Job Posted Successfully!</div>}
      <div style={styles.card}>
        <h2 style={styles.title}>Post a Job</h2>
        {error && <p style={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit} style={styles.form}>
          <input type="text" name="title" placeholder="Job Title *" value={job.title} onChange={handleChange} style={styles.input} />
          <input type="text" name="company" placeholder="Company Name *" value={job.company} onChange={handleChange} style={styles.input} />
          
          <input type="file" accept="image/*" onChange={handleFileChange} style={styles.input} />
          
          <input type="text" name="location" placeholder="Location *" value={job.location} onChange={handleChange} style={styles.input} />
          <select name="jobType" value={job.jobType} onChange={handleChange} style={styles.select}>
            <option value="" disabled>Select Job Type *</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Contract">Contract</option>
          </select>
          <input type="date" name="deadline" placeholder="Application Deadline" value={job.deadline} onChange={handleChange} style={styles.input} />
          <label style={styles.checkboxLabel}>
            <input type="checkbox" name="remote" checked={job.remote} onChange={handleChange} style={styles.checkbox} />
            Remote Job
          </label>
          <input type="text" name="salary" placeholder="Salary (optional)" value={job.salary} onChange={handleChange} style={styles.input} />
          <textarea name="skills" placeholder="Required Skills (comma separated)" value={job.skills} onChange={handleChange} style={styles.textarea} />
          <textarea name="benefits" placeholder="Job Benefits (comma separated)" value={job.benefits} onChange={handleChange} style={styles.textarea} />
          <textarea name="description" placeholder="Job Description *" value={job.description} onChange={handleChange} style={styles.textarea} />
          <button type="submit" style={styles.button}>Post Job</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f4f4f4",
    padding: "20px",
    position: "relative",
  },
  card: {
    width: "100%",
    maxWidth: "500px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "15px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "12px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    outline: "none",
  },
  select: {
    padding: "12px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    outline: "none",
    backgroundColor: "#fff",
  },
  textarea: {
    padding: "12px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    minHeight: "80px",
    outline: "none",
  },
  checkboxLabel: {
    display: "flex",
    alignItems: "center",
    fontSize: "16px",
    gap: "10px",
  },
  checkbox: {
    width: "20px",
    height: "20px",
  },
  button: {
    padding: "12px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "0.3s",
  },
  toast: {
    position: "absolute",
    top: "20px",
    backgroundColor: "#28a745",
    color: "#fff",
    padding: "12px 20px",
    borderRadius: "5px",
    fontSize: "16px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    animation: "fadeInOut 3s ease-out",
  },
  error: {
    color: "red",
    fontSize: "14px",
    marginBottom: "10px",
  },
};

export default AddJobPage;
