import React, { useState } from "react";
import { auth, googleProvider } from "../firebse"; 
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 

function RecruiterLogin() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(""); 
  const [location, setLocation] = useState(""); 
  const [companySize, setCompanySize] = useState(""); 
  const navigate = useNavigate();

  const clearFields = () => {
    setName("");
    setEmail("");
    setPassword("");
    setCompanyName("");
    setJobTitle("");
    setPhoneNumber(""); 
    setLocation(""); 
    setCompanySize(""); 
  };

  const handleSignup = async () => {
    if (!name.trim() || !companyName.trim() || !jobTitle.trim()) {
      toast.error("Name, Company Name, and Job Title are required for signing up!");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      toast.error("Enter a valid email address.");
      return;
    }
    if (password.trim().length < 6) {
      toast.error("Password should be at least 6 characters long.");
      return;
    }
    if (!phoneNumber.trim() || !/^\d{10}$/.test(phoneNumber)) {
      toast.error("Enter a valid 10-digit phone number.");
      return;
    }
    if (!location.trim()) {
      toast.error("Location is required.");
      return;
    }
    if (!companySize.trim()) {
      toast.error("Company Size is required.");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });
      toast.success("Recruiter account created successfully!");
      clearFields();
    } catch (error) {
      toast.error("Sign-up failed: " + error.message);
    }
  };

  const handleLogin = async () => {
    if (!email.trim() || !email.includes("@")) {
      toast.error("Enter a valid email address.");
      return;
    }
    if (!password.trim()) {
      toast.error("Password is required.");
      return;
    }
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      navigate("/recruiter-login");
      toast.success("Logged in successfully!");
      clearFields();
    } catch (error) {
      toast.error("Login failed: " + error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      toast.success("Google Sign-In successful!");
      navigate("/"); 
    } catch (error) {
      toast.error("Google Sign-In failed: " + error.message);
    }
  };

  return (
    <>
      <header className="auth-header">
        <h1>Recruiter Login</h1>
      </header>
    
      <div className="auth-container">
        <div className="auth-box">
          <h2>{isLogin ? "Login" : "Sign Up"}</h2>
          
          {!isLogin && (
            <>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="companyName">Company Name</label>
                <input
                  id="companyName"
                  type="text"
                  placeholder="Enter your company name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="jobTitle">Job Title</label>
                <input
                  id="jobTitle"
                  type="text"
                  placeholder="Enter your job title"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  id="phoneNumber"
                  type="text"
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="location">Location</label>
                <input
                  id="location"
                  type="text"
                  placeholder="Enter your location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="companySize">Company Size</label>
                <input
                  id="companySize"
                  type="text"
                  placeholder="Enter company size (e.g., small, medium, large)"
                  value={companySize}
                  onChange={(e) => setCompanySize(e.target.value)}
                />
              </div>
            </>
          )}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="auth-button" onClick={isLogin ? handleLogin : handleSignup}>
            {isLogin ? "Login" : "Sign Up"}
          </button>
          <p className="toggle-message">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <span
              onClick={() => {
                setIsLogin(!isLogin);
                clearFields();
              }}
            >
              {isLogin ? "Sign Up" : "Login"}
            </span>
          </p>
          <button className="auth-button google-button" onClick={handleGoogleSignIn}>
            Sign in with Google
          </button>
        </div>
      </div>

    
      <ToastContainer />
    </>
  );
}

export default RecruiterLogin;
