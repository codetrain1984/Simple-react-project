import React from 'react'
import Navbar from './Navbar'
import './Header.css'
import HeaderBox from './HeaderBox'
import { ImEarth } from 'react-icons/im'
import { FaSwatchbook, FaChalkboardTeacher } from 'react-icons/fa'

const Header = () => {
  return (
    <div className="container" id="hero">
      <Navbar />
      <div className="title">
        <h1>
          Get your <span>Education</span> today!
        </h1>
      </div>
      <div className="boxes">
        <HeaderBox title="Online Courses" logo={<ImEarth />} />
        <HeaderBox title="Our Library" logo={<FaSwatchbook />} />
        <HeaderBox title="Our Teachers" logo={<FaChalkboardTeacher />} />
      </div>
    </div>
  )
}

export default Header
