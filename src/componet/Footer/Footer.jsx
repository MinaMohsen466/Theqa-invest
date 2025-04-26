import React, { useEffect } from 'react';
import './Footer.css';
import { FaTiktok, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo from '../../../public/IMG/theqa-logo-white.png';
import { useLocation, Link } from 'react-router-dom';

const Footer = ({language}) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Function to handle navigation to sections
  const handleNavigation = (e, sectionId) => {
    e.preventDefault();
    
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Store the target section in sessionStorage before redirecting
      sessionStorage.setItem('scrollToSection', sectionId);
      window.location.href = '/';
    }
  };

  // Check for stored section on component mount
  useEffect(() => {
    if (isHomePage) {
      const scrollToSection = sessionStorage.getItem('scrollToSection');
      if (scrollToSection) {
        const element = document.getElementById(scrollToSection);
        if (element) {
          // Small delay to ensure page is loaded
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
            sessionStorage.removeItem('scrollToSection');
          }, 100);
        }
      }
    }
  }, [isHomePage]);
  
  return (
    <footer className={`footer ${language ? 'rtl' : ''}`}>
      <div className="footer-container">
        <Link to="/" className="footer-logo">
          <img src={logo} alt={language ? "شعار ثقة للاستثمار" : "Theqa Invest Logo"} />
        </Link>
        
        <div className="social-section">
          <h3>{language ? "تابعنا على" : "Find Us On"}</h3>
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
            <li>
              <Link to="/">{language ? "الرئيسية" : "Home"}</Link>
            </li>
            <li>
              <a href="#testimonial" onClick={(e) => handleNavigation(e, "testimonial")}>
                {language ? "خدماتنا" : "Services"}
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleNavigation(e, "about")}>
                {language ? "عن ثقة" : "About Theqa"}
              </a>
            </li>
            <li>
              <a href="#location" onClick={(e) => handleNavigation(e, "location")}>
                {language ? "موقعنا" : "Locate Us"}
              </a>
            </li>
          </ul>
        </nav>
        
        <div className="footer-bottom">
          <p>
            {language ? "© 2025 ثقة للاستثمار." : "© 2025 Theqa Invest."} | 
            <Link to="/TermsAndConditions">{language ? " الشروط والأحكام" : " Terms & Conditions"}</Link> | 
            <Link to="/PrivacyPolicies">{language ? " سياسة الخصوصية" : " Privacy Policy"}</Link> | 
            {language ? " جميع الحقوق محفوظة." : " All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;