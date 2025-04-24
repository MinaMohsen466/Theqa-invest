import React from 'react';
import './Footer.css';
import { FaTiktok, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo from '../../../public/IMG/theqa-logo-white.png';
import { useLocation, Link } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  
  // Function to handle navigation to sections
  const handleNavigation = (e, sectionId) => {
    e.preventDefault();
    
    if (isHomePage) {
      // If on home page, scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on another page, navigate to home page with hash
      window.location.href = `/${sectionId ? '#' + sectionId : ''}`;
    }
  };
  
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
            <li><Link to="/">Home</Link></li>
            <li><a href="#testimonial" onClick={(e) => handleNavigation(e, 'testimonial')}>Services</a></li>
            <li><a href="#about" onClick={(e) => handleNavigation(e, 'about')}>About Theqa</a></li>
            <li><a href="#location" onClick={(e) => handleNavigation(e, 'location')}>Locate Us</a></li>
          </ul>
        </nav>
        
        <div className="footer-bottom">
          <p>© 2025 Theqa Invest. | <a href="/TermsAndConditions">Terms & Conditions</a> | <a href="/PrivacyPolicies">Privacy Policy</a> | All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;