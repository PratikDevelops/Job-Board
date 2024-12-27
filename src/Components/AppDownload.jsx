import React from 'react'
import { assets } from '../assets/assets'
import "../css/AppDownload.css"

function AppDownload() {
  return (
    <div className="app-download-container">
    <div className="app-download-content">
      <div className="download-heading">
        <h1>Download Mobile App For Better Experience</h1>
        <div className="download-buttons">
          <a href="">
            <img src={assets.play_store} className="store-logo" alt="Play Store" />
          </a>
          <a href="">
            <img src={assets.app_store} className="store-logo" alt="App Store" />
          </a>
        </div>
      </div>
    </div>
    <img src={assets.app_main_img} className="app-main-img" alt="App Feature" />
  </div>
  
  )
}

export default AppDownload