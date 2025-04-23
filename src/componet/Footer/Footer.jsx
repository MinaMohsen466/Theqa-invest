import React from 'react';
import './Footer.css';
import { FaTiktok, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo from '../../../public/IMG/theqa-logo-white.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Theqa Invest Logo" />
        </div>
        
        <div className="social-section">
          <h3>Find Us On</h3>
          <div className="social-icons">
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
              <FaTiktok />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>
        
        <nav className="footer-nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#testimonial">Services</a></li>
            <li><a href="#about">About Theqa</a></li>
            <li><a href="#location">Locate Us</a></li>
          </ul>
        </nav>
        
        <div className="footer-bottom">
          <p>© 2025 Theqa Invest. | <a href="/terms">Terms & Conditions</a> | <a href="/privacy">Privacy Policy</a> | All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;