import React from 'react'
import { assets } from "../assets/assets"

import { useNavigate } from 'react-router-dom'

function Navbar() {
    
    const navigate = useNavigate()

    return (
        <div className="navbar">
            <img onClick={()=> navigate("/")} src={assets.logo} alt="Logo" className="logo" />
            <div className="buttons">
                <button className="button" aria-label="Recruiter Login">Recruiter Login</button>
                <button className="button" aria-label="Login">Sign Up</button>
            </div>
        </div>
    )
}

export default Navbar
