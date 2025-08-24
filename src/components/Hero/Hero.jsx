import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className='hero'>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <p className="tagline">New Arrival</p>
        <h1>Discover Our <br /> New Collection</h1>
        <p className="desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
          luctus nec ullamcorper mattis.
        </p>
        <button className="cta-btn">Buy Now</button>
      </div>
    </section>
  )
}

export default Hero