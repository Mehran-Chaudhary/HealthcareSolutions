import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create WhatsApp message
    const message = `Contact Form Submission:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}
Message: ${formData.message}`;

    const phoneNumber = "+923001234567"; // Replace with actual WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    // Show success message
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">
          Get in touch with us for appointments, inquiries, or any assistance.
          We're here to help you with your healthcare needs.
        </p>

        {/* MAP SECTION - MOVED TO THE VERY START */}
        <div className="map-section">
          <h3>Find Us on Map</h3>
          <div className="map-container">
            <div className="map-responsive">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3377.8234567890123!2d73.68721!3d31.58321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDM0JzU5LjYiTiA3M8KwNDEnMTQuMCJF!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shamim Hospital Location"
              ></iframe>
            </div>
            <div className="map-info">
              <div className="map-details">
                <h4>📍 Shamim Hospital</h4>
                <p>Shamim hospital, HMMP+9VF, Main bazar, Mananwala</p>
                <div className="map-actions">
                  <a
                    href="https://maps.google.com/?q=31.58321,73.68721"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    Open in Google Maps
                  </a>
                  <a
                    href="https://maps.google.com/maps/dir//31.58321,73.68721"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CONTACT CONTENT - BELOW MAP */}
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <div className="info-cards">
              <div className="info-card">
                <div className="info-icon">📞</div>
                <div className="info-details">
                  <h4>Phone</h4>
                  <p>+92 563 771155</p>
                  <p>Available 24/7 for emergencies</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">📧</div>
                <div className="info-details">
                  <h4>Email</h4>
                  <p>info@shamimhospital.com</p>
                  <p>We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">📍</div>
                <div className="info-details">
                  <h4>Address</h4>
                  <p>Shamim hospital, HMMP+9VF</p>
                  <p>Main bazar, Mananwala</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">🕒</div>
                <div className="info-details">
                  <h4>Working Hours</h4>
                  <p>Mon - Sat: 8:00 AM - 10:00 PM</p>
                  <p>Sunday: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="#" className="social-link facebook">
                  <img src="/facebook.png" alt="Facebook" />
                </a>
                <a href="#" className="social-link instagram">
                  <img src="/instagram.jpeg" alt="Instagram" />
                </a>
                <a href="#" className="social-link whatsapp">
                  <img src="/whatsapp.jpeg" alt="WhatsApp" />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            {isSubmitted ? (
              <div className="success-message">
                <div className="success-icon">✅</div>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for contacting us. We'll get back to you soon.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Send us a Message</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Enter subject"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter your message"
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn submit-btn">
                  📧 Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
