// Navbar.jsx
import React, { useState } from 'react';
import '../Navbar/Navbar.css';
import logo from '../../../public/IMG/theqa-logo-white.png';
import { RxDropdownMenu, RxCross1 } from "react-icons/rx";
import { FiGlobe, FiChevronRight } from "react-icons/fi";
import { RiMenu3Fill } from "react-icons/ri";

const Navbar = ({ language, setLanguage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  
  const toggleLanguage = () => {
    setLanguage(!language);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const menuItems = language ? [
    { text: "الرئيسية", key: "home" },
    { text: "عنا", key: "about" },
    { text: "الرئيس التنفيذى", key: "ceo" },
    { text: "توصية", key: "testimonial" },
    { text: "تواصل معنا", key: "contact" }
  ] : [
    { text: "Home", key: "home" },
    { text: "About Theqa", key: "about" },
    { text: "Our CEO", key: "ceo" },
    { text: "Testimonial", key: "testimonial" },
    { text: "Contact Us", key: "contact" }
  ];

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className='logo'>
          <img src={logo} alt="THEQA-INVEST-LOGO" />
        </div>

        {/* Desktop Menu */}
        <nav className={`desktop-menu ${language ? 'rtl' : 'ltr'}`}>
          <ul>
            {menuItems.map((item) => (
              <li 
                key={item.key}
                onMouseEnter={() => setHoveredItem(item.key)}
                onMouseLeave={() => setHoveredItem(null)}
                className={hoveredItem === item.key ? 'hovered' : ''}
              >
                {item.text}
                <span className="hover-underline"></span>
              </li>
            ))}
          </ul>
        </nav>

        {/* Language Toggle - Single Button */}
        <button 
          className="language-toggle"
          onClick={toggleLanguage}
          aria-label={language ? "Switch to English" : "التغيير إلى العربية"}
          onMouseEnter={(e) => e.currentTarget.classList.add('hovered')}
          onMouseLeave={(e) => e.currentTarget.classList.remove('hovered')}
        >
          <FiGlobe className="globe-icon" />
          {language ? "English" : "العربية"}
          <span className="hover-underline"></span>
        </button>

        {/* Mobile Menu Button */}
        <button 
          className='mobile-menu-button' 
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <RxCross1 /> : <RiMenu3Fill />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''} ${language ? 'rtl' : 'ltr'}`}>
          <nav className="mobile-menu">
            <ul>
              {menuItems.map((item) => (
                <li 
                  key={item.key} 
                  className="mobile-menu-item"
                  onClick={toggleMobileMenu}
                >
                  <div className="mobile-menu-content">
                    <span className="mobile-menu-text">{item.text}</span>
                    <FiChevronRight className="mobile-menu-arrow" />
                  </div>
                </li>
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