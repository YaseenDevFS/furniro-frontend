import React from 'react'
import './Header.css'
import img from '../../assets/Group 78.png'

const Header = () => {
  return (
    <div className="header">
      <img className='header-image' src={img} alt="Header" />
    </div>
  )
}

export default Header