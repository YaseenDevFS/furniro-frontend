import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import cart from '../../assets/cart.png'
import search from '../../assets/akar-icons_search.png'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="navbar">
      <Link to={'/home'}>
        <img src={logo} alt="Logo" className="logo" />
      </Link>

      {/* Hamburger */}
      <div 
        className={`menu-btn ${menuOpen ? "open" : ""}`} 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu */}
      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        <ul>
          <li>
            <Link 
              onClick={() => { setActiveLink('home'); setMenuOpen(false) }} 
              className={activeLink === 'home' ? 'active' : ''} 
              to={'/home'}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              onClick={() => { setActiveLink('shop'); setMenuOpen(false) }} 
              className={activeLink === 'shop' ? 'active' : ''} 
              to={'/shop'}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link 
              onClick={() => { setActiveLink('about'); setMenuOpen(false) }} 
              className={activeLink === 'about' ? 'active' : ''} 
              to={'/about'}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              onClick={() => { setActiveLink('contact'); setMenuOpen(false) }} 
              className={activeLink === 'contact' ? 'active' : ''} 
              to={'/contact'}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* ✅ icons جوة المينيو في الموبايل */}
        <div className="menu-icons">
          <Link onClick={() => setMenuOpen(false)} to="/Cart"><img className='cart-icon' src={cart} alt="Cart" /></Link>
        </div>
      </nav>

      {/* ✅ icons للـ Desktop فقط */}
      <div className="icons desktop-only">
        <img src={search} alt="Search" />
        <Link to="/Cart"><img className='cart-icon' src={cart} alt="Cart" /></Link>
      </div>
    </header>
  )
}

export default Navbar