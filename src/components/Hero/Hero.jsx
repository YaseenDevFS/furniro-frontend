import React from 'react'
import './Hero.css'
import img from '../../assets/Hero.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="text">
            <p>New Arrival</p>
            <h1>Discover Our <br /> New Collection</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <button>Buy Now</button>
        </div>
    </div>
  )
}

export default Hero