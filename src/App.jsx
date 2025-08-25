import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Shop from "./pages/Shop/Shop";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Success from "./components/Success";
import Cancel from "./components/Cancel";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // هنا نخلي الـ Loader يختفي بعد ما الـ React يركب (mount)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 ثانية (ممكن تزود لو عايز)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <LoadingScreen loading={loading} />

      <div style={{ display: loading ? "none" : "block" }}>
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
    </div>
  );
};

export default App;