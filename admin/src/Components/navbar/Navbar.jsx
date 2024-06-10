import React from 'react'
import "./Navbar.css"
import Logo from "../../assets/wearsumadmin.png"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-logo'><img src={Logo} alt="" className="navbar-logo" /></div>
        
    </div>
  )
}

export default Navbar