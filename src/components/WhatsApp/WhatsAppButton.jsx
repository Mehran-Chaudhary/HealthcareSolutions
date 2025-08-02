import React, { useState, useEffect } from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Show tooltip after 3 seconds
      setTimeout(() => {
        setShowTooltip(true);
        // Hide tooltip after 5 seconds
        setTimeout(() => {
          setShowTooltip(false);
        }, 5000);
      }, 3000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const message = "Hello Shamim Hospital! I would like to get more information about your services.";
    const whatsappUrl = `https://wa.me/923124447335?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Hide tooltip when clicked
    setShowTooltip(false);
  };

  return (
    <>
      <div className={`whatsapp-button ${isVisible ? 'visible' : ''}`}>
        <button 
          className="whatsapp-btn"
          onClick={handleWhatsAppClick}
          aria-label="Contact us on WhatsApp"
        >
          <img src="/whatsapp.jpeg" alt="WhatsApp" style={{width: '24px', height: '24px', borderRadius: '4px'}} />
        </button>
        
        {showTooltip && (
          <div className="whatsapp-tooltip">
            <p>Need help? Chat with us!</p>
            <div className="tooltip-arrow"></div>
          </div>
        )}
      </div>
      
      {/* WhatsApp Chat Widget */}
      <div className="whatsapp-widget">
        <div className="widget-header">
          <div className="widget-avatar">
            <img src="/whatsapp.jpeg" alt="WhatsApp" style={{width: '30px', height: '30px', borderRadius: '50%'}} />
          </div>
          <div className="widget-info">
            <h4>Shamim Hospital</h4>
            <p>Typically replies instantly</p>
          </div>
        </div>
        
        <div className="widget-message">
          <p>Hi there! 👋</p>
          <p>How can we help you today?</p>
          <div className="quick-options">
            <button onClick={() => handleQuickMessage('appointment')}>📅 Book Appointment</button>
            <button onClick={() => handleQuickMessage('lab')}>🧪 Lab Tests</button>
            <button onClick={() => handleQuickMessage('emergency')}>🚨 Emergency</button>
            <button onClick={() => handleQuickMessage('general')}>💬 General Inquiry</button>
          </div>
        </div>
      </div>
    </>
  );

  function handleQuickMessage(type) {
    let message = "";
    
    switch(type) {
      case 'appointment':
        message = "Hello! I would like to book an appointment. Please let me know the available slots.";
        break;
      case 'lab':
        message = "Hi! I need information about lab tests and their prices.";
        break;
      case 'emergency':
        message = "This is an emergency. Please provide immediate assistance.";
        break;
      case 'general':
        message = "Hello! I have a general inquiry about your hospital services.";
        break;
      default:
        message = "Hello Shamim Hospital! I would like to get more information.";
    }
    
    const whatsappUrl = `https://wa.me/923124447335?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }
};

export default WhatsAppButton;