import React from 'react'
import Navbar from '../../components/NavBar/Navbar'
import Hero from '../../components/Hero/Hero'
import Range from '../../components/Range/Range'
import Products from '../../components/Products/Products'

const Home = () => {
  return (
    <div>
      <Hero />
      <Range />
      <Products />
    </div>
  )
}

export default Home