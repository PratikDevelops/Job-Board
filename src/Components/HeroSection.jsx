import React, { useContext, useRef } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../Context/AppContext";
import "../css/HeroSection.css"

function HeroSection() {
  const { searchFilter, setIsSearched, setSearchFilter } = useContext(AppContext);

  const titleRef = useRef(null);
  const locationRef = useRef(null);

  function onSearch() {
    if (!titleRef.current.value && !locationRef.current.value) {
      alert("Please enter a job title or location to search.");
      return;
    }
    setSearchFilter({
      title: titleRef.current.value,
      location: locationRef.current.value,
    });
    setIsSearched(true);
  }
  

  return (
    <>
    <section className="hero-section">
      <div className="hero-content">
        <h1>Find Your Dream Job</h1>
        <p>Search for jobs by title, location, or company</p>
        <div className="search-bar">
          <input
            type="text"
            ref={titleRef}
            placeholder="Job Title"
            className="search-input"
          />
        </div>
        <div className="search-bar">
          <input
            type="text"
            ref={locationRef}
            placeholder="Location"
            className="search-input"
          />
          <button onClick={onSearch} className="search-button">
            Search Jobs
          </button>
        </div>
      </div>
    </section>
    <section className="trusted-brands">
      <div className="trusted-cards">
        <div className="brand-card">
          <img src={assets.accenture_logo} alt="Accenture Logo" />
        </div>
        <div className="brand-card">
          <img src={assets.microsoft_logo} alt="Microsoft Logo" />
        </div>
        <div className="brand-card">
          <img src={assets.adobe_logo} alt="Adobe Logo" />
        </div>
        <div className="brand-card">
          <img src={assets.samsung_logo} alt="Samsung Logo" />
        </div>
        <div className="brand-card">
          <img src={assets.amazon_logo} alt="Amazon Logo" />
        </div>
        <div className="brand-card">
          <img src={assets.walmart_logo} alt="Walmart Logo" />
        </div>
      </div>
    </section>
    </>
  );
}

export default HeroSection;
