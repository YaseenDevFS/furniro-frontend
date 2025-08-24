import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <h1>About Us</h1>
        <p>
          Welcome to <span className="highlight">Furniro</span> – 
          where quality meets trust. We are dedicated to providing you with the 
          best products, seamless shopping experience, and excellent customer support.
        </p>
      </div>

      {/* About Content */}
      <div className="about-container">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            We are an online marketplace offering a wide range of products to 
            suit your everyday needs. Our mission is to make shopping easier, 
            faster, and more enjoyable for everyone. 
          </p>

          <h2>Why Choose Us?</h2>
          <ul>
            <li>✅ High-quality products at affordable prices</li>
            <li>✅ Fast and reliable delivery</li>
            <li>✅ 24/7 customer support</li>
            <li>✅ Easy and secure payment methods</li>
          </ul>
        </div>

  
      </div>
    </div>
  );
};

export default About;
