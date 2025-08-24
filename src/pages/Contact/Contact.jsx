import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Title */}
      <div className="contact-header">
        <h1>Contact Us ✨</h1>
        <p>
          Have questions about your order or need help with our products? Reach
          out and we’ll be happy to assist you!
        </p>
      </div>

      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <h2>Contact Information</h2>
          <div className="info-item">
            <FaPhone className="icon" />
            <span>+20 1200873693</span>
          </div>
          <div className="info-item">
            <FaEnvelope className="icon" />
            <span>support@yourecommerce.com</span>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <span>Cairo, Egypt</span>
          </div>


        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send Us a Message 📩</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="5" placeholder="Your Message" required></textarea>
            <button type="submit">
              <FaPaperPlane /> Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
