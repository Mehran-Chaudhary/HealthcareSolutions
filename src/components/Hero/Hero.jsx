import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToAppointment = () => {
    const element = document.getElementById('appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Welcome to Shamim Hospital</h1>
            <p>Your Health, Our Priority - Providing exceptional medical care with compassion and expertise</p>
            <div className="hero-features">
              <div className="feature">
                <span className="feature-icon">👨‍⚕️</span>
                <span>Expert Doctors</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🧪</span>
                <span>Advanced Lab</span>
              </div>
              <div className="feature">
                <span className="feature-icon">📱</span>
                <span>Online Booking</span>
              </div>
            </div>
            <div className="hero-actions">
              <button className="btn" onClick={scrollToAppointment}>Book Appointment</button>
              <a href="#contact" className="btn btn-outline">Contact Us</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">
              <span>Hospital Image</span>
              <p>Professional hospital/clinic photo will be placed here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;