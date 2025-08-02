import React, { useState, useEffect } from "react";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Show tooltip after 3 seconds
      setShowTooltip(true);
      // Hide tooltip after 5 seconds
      setTimeout(() => {
        setShowTooltip(false);
      }, 5000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const message =
      "Hello Shamim Hospital! I would like to get more information about your services.";
    const whatsappUrl = `https://wa.me/923124447335?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");

    // Hide tooltip when clicked
    setShowTooltip(false);
  };

  return (
    <>
      <div className="whatsapp-button">
        <button
          className="whatsapp-btn"
          onClick={handleWhatsAppClick}
          aria-label="Contact us on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
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
            <button onClick={() => handleQuickMessage("appointment")}>
              <div className="quick-option-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              Book Appointment
            </button>
            <button onClick={() => handleQuickMessage("lab")}>
              <div className="quick-option-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
                  <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
                </svg>
              </div>
              Lab Tests
            </button>
            <button onClick={() => handleQuickMessage("emergency")}>
              <div className="quick-option-icon emergency">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </div>
              Emergency
            </button>
            <button onClick={() => handleQuickMessage("general")}>
              <div className="quick-option-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              General Inquiry
            </button>
          </div>
        </div>
      </div>
    </>
  );

  function handleQuickMessage(type) {
    let message = "";

    switch (type) {
      case "appointment":
        message =
          "Hello! I would like to book an appointment. Please let me know the available slots.";
        break;
      case "lab":
        message = "Hi! I need information about lab tests and their prices.";
        break;
      case "emergency":
        message = "This is an emergency. Please provide immediate assistance.";
        break;
      case "general":
        message =
          "Hello! I have a general inquiry about your hospital services.";
        break;
      default:
        message =
          "Hello Shamim Hospital! I would like to get more information.";
    }

    const whatsappUrl = `https://wa.me/923124447335?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  }
};

export default WhatsAppButton;
