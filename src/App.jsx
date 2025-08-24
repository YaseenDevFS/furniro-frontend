import React from 'react'
import Register from './pages/Register/Register'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import { ToastContainer } from 'react-toastify'
import Navbar from './components/NavBar/Navbar'
import SingleProduct from './pages/SingleProduct/SingleProduct'
import Footer from './components/Footer/Footer'
import Shop from './pages/Shop/Shop'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import Success from './components/Success'
import Cancel from './components/Cancel'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App