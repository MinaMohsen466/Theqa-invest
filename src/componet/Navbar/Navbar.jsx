// Navbar.jsx
import React, { useState, useEffect } from 'react';
import '../Navbar/Navbar.css';
import logo from '../../../public/IMG/theqa-logo.png';
import { RxCross1 } from "react-icons/rx";
import { FiGlobe, FiChevronRight } from "react-icons/fi";
import { RiMenu3Fill } from "react-icons/ri";
import { useLocation, Link } from 'react-router-dom';

const Navbar = ({ language, setLanguage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  useEffect(() => {
    const savedLanguage = localStorage.getItem('theqa-language');
    if (savedLanguage !== null) {
      setLanguage(savedLanguage === 'true');
    }
  }, [setLanguage]);
  
  const toggleLanguage = () => {
    const newLanguage = !language;
    setLanguage(newLanguage);
    localStorage.setItem('theqa-language', newLanguage.toString());
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavigation = (e, sectionId) => {
    e.preventDefault();
    
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
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

  const menuItems = language ? [
    { text: "عنا", key: "about", href: "#about" },
    { text: "خدماتنا", key: "testimonial", href: "#testimonial" },
    { text: "موقعنا", key: "location", href: "#location"}
  ] : [
    { text: "About Theqa", key: "about", href: "#about" },
    { text: "Services", key: "Services", href: "#testimonial" },
    { text: "Locate Us", key: "Locate Us", href: "#location" }
  ];

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className='logo'>
          <Link to="/">
            <img src={logo} alt="THEQA-INVEST-LOGO" />
          </Link>
        </div>
        <div className="navbar-right-group">
          <nav className={`desktop-menu ${language ? 'rtl' : 'ltr'}`}>
            <ul>
              {menuItems.map((item) => (
                <a 
                  href={item.href}
                  key={item.key}
                  onMouseEnter={() => setHoveredItem(item.key)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={hoveredItem === item.key ? 'hovered' : ''}
                  onClick={(e) => handleNavigation(e, item.key)}
                >
                  {item.text}
                  <span className="hover-underline"></span>
                </a>
              ))}
            </ul>
          </nav>
          <button 
            className="language-toggle"
            onClick={toggleLanguage}
            aria-label={language ? "Switch to English" : "التغيير إلى العربية"}
            onMouseEnter={(e) => e.currentTarget.classList.add('hovered')}
            onMouseLeave={(e) => e.currentTarget.classList.remove('hovered')}
          >
            {language ? "E" : "ع"}
            <span className="hover-underline"></span>
          </button>
        </div>
        <button 
          className='mobile-menu-button' 
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <RxCross1 style={{ color: "var(--white-color)" }} /> : <RiMenu3Fill style={{ color: "var(--primary-color)" }} />}
        </button>

        <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''} ${language ? 'rtl' : 'ltr'}`}>
          <nav className="mobile-menu">
            <ul>
              {menuItems.map((item) => (
                <a
                  href={item.href} 
                  key={item.key} 
                  className="mobile-menu-item"
                  onClick={(e) => handleNavigation(e, item.key)}
                >
                  <div className="mobile-menu-content">
                    <span className="mobile-menu-text">{item.text}</span>
                    <FiChevronRight className="mobile-menu-arrow" />
                  </div>
                </a>
              ))}
            </ul>
          </nav>

          <button 
            className='mobile-language-toggle'
            onClick={() => {
              toggleLanguage();
              toggleMobileMenu();
            }}
          >
            <FiGlobe className="globe-icon" />
            {language ? "English" : "العربية"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;