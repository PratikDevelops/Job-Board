import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebse";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/Navbar.css"

function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Successfully logged out!");
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  const handleLogin = () => {
    toast.success("Successfully logged in!");
  };

  return (
    <div className="navbar">
      <img
        onClick={() => navigate("/")}
        src={assets.logo}
        alt="Logo"
        className="logo"
      />
      <div className="buttons">
        {user ? (
          <div className="user-info">
            <span>Hello, {user.displayName || user.email}</span>
            <button className="button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <>
            <button
              className="button"
              onClick={() => navigate("/recruiter-signup")}
              aria-label="Recruiter Login"
            >
              Recruiter Login
            </button>
            <button
              className="button"
              aria-label="Sign Up"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}

export default Navbar;
