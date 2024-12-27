import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import JobListing from '../Components/JobListing'

import Footer from '../Components/Footer'
import AppDownload from '../Components/AppDownload.jsx'
import ApplyNow from '../Components/ApplyNow.jsx'

function Home() {
  return (
    <div>
      <Navbar/>
       <HeroSection></HeroSection>
       <JobListing/>
       <AppDownload/>
       <Footer/>
       <ApplyNow/>
    </div>
  )
}

export default Home