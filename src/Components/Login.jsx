import React, { useState } from "react";
import { auth, googleProvider } from "../firebse";
import "../css/Login.css"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";  

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const clearFields = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleSignup = async () => {
    if (!name.trim()) {
      toast.error("Name is required for signing up!");
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
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });
      toast.success("Account created successfully!");
      clearFields();
    } catch (error) {
      toast.error("Sign-up failed. Please try again.");
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
      toast.success("Logged in successfully!");
      navigate("/");
      clearFields();
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      toast.success("Google Sign-In successful!");
      navigate("/");
    } catch (error) {
      toast.error("Google Sign-In failed. Please try again.");
    }
  };

  return (
    <>
      <header className="auth-header">
        <h1>Applicant Login</h1>
      </header>

      <div className="auth-container">
        <div className="auth-box">
          <h2>{isLogin ? "Login" : "Sign Up"}</h2>
          {!isLogin && (
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

      {/* Toast Container */}
      <ToastContainer />
    </>
  );
}

export default Login;
