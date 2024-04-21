import React, { useState } from 'react'
import './navbar.css'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)
  return (
    <>

    <div className='container'>
        <div className='Navbar'>
            <span className='nav-logo'>Azizdev__</span>
            <div className={`nav-items ${isOpen && 'open'}`}>
            <a href='#!'>Home</a>
            <a href='#!'>About</a>
            <a href='#!'>service</a>
            <a href='#!'>Contact</a>
            </div>
            <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                <div className='bar'></div>
            </div>
        </div>
    </div>

    </>
  )
}

export default Navbar