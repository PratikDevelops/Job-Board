import React from 'react';
import { assets } from '../assets/assets';
import "../css/Footer.css"

function Footer() {
  return (
    <div className="footer-container">
      <img src={assets.logo} alt="Logo" className="footer-logo-img" /> 
      <p className="footer-text">  Copyright @InsiderJobs | All rights reserved.</p>
      <div className="footer-social-icons">
        <img src={assets.facebook_icon} alt="Facebook" className="social-icon" />
        <img src={assets.twitter_icon} alt="Twitter" className="social-icon" />
        <img src={assets.instagram_icon} alt="Instagram" className="social-icon" />
      </div>
    </div>
  );
}

export default Footer;
