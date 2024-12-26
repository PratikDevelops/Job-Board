import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import JobListing from '../Components/JobListing'
import AppDownload from '../Components/AppDownload.jsX'
import Footer from '../Components/Footer'

function Home() {
  return (
    <div>
      <Navbar/>
       <HeroSection></HeroSection>
       <JobListing/>
       <AppDownload/>
       <Footer/>
    </div>
  )
}

export default Home