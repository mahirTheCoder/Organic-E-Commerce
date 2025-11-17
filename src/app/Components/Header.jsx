import React from 'react'
import logo from '../../../public/Images/logo.png'
import Image from 'next/image'
const Header = () => {
  return (
    <>
    
     <section id="Navbar">
      <div className="container">
        <div className="nav-rows">
          <div className="logo">
            <Image src={logo}  alt='logo'/>
          </div>
          <div className="menu-items"></div>
          
        </div>
      </div>
    </section>
    </>
  )
}

export default Header