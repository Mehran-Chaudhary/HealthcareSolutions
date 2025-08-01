import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <div className="logo-icon">
              <span className="medical-cross">+</span>
            </div>
            <div className="logo-text">
              <h2>Shamim Hospital</h2>
              <span>Healthcare Excellence</span>
            </div>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
              <li><a href="#doctors" onClick={() => scrollToSection('doctors')}>Doctors</a></li>
              <li><a href="#appointment" onClick={() => scrollToSection('appointment')}>Appointment</a></li>
              <li><a href="#lab" onClick={() => scrollToSection('lab')}>Lab Services</a></li>
              <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
            </ul>
          </nav>
          
          <div className="header-actions">
            <a href="tel:+1234567890" className="btn btn-outline">📞 Call Now</a>
            <button className="menu-toggle" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
