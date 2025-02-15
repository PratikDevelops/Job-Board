import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import ApplyJob from './Pages/ApplyJob'
import Application from './Pages/Application'
import Login from './Components/Login'
import RecruiterLogin from './Components/RecruiterLogin'
import AddJobPage from './Components/AddJobPage'

import ApplyNow from './Components/ApplyNow'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/apply-job/:id' element={<ApplyJob/>}/>
        <Route path='/applications' element={<Application/>}/>
        <Route path="/signup" element={<Login />} />
        <Route path="/recruiter-signup" element={<RecruiterLogin/>}/>
        <Route path="/add-job" element={<AddJobPage />} />
        <Route path="/apply-now/:jobId" element={<ApplyNow />} />
      </Routes>
    </div>
  )
}

export default App
