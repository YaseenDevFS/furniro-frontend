import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import cart from '../../assets/cart.png'
import search from '../../assets/akar-icons_search.png'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home')
  return (
    <div className="navbar">
      <Link to={'/home'}>
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <nav>
        <ul>
          <li><Link onClick={() => setActiveLink('home')} className={activeLink === 'home' ? 'active' : ''} to={'/home'}>Home</Link></li>
          <li><Link onClick={() => setActiveLink('shop')} className={activeLink === 'shop' ? 'active' : ''} to={'/shop'}>Shop</Link></li>
          <li><Link onClick={() => setActiveLink('about')} className={activeLink === 'about' ? 'active' : ''} to={'/about'}>About</Link></li>
          <li><Link onClick={() => setActiveLink('contact')} className={activeLink === 'contact' ? 'active' : ''} to={'/contact'}>Contact</Link></li>
        </ul>
      </nav>
      <div className='icons'>
        <img src={search} alt="Search" />
        <Link to="/Cart"><img className='cart-icon' src={cart} alt="Cart" /></Link>
      </div>
    </div>
  )
}

export default Navbar