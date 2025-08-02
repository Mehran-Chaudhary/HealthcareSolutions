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

    // WhatsApp integration for contact form
    const whatsappMessage = `Hello Shamim Hospital!\n\nContact Form Submission:\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\nMessage: ${formData.message}`;

    const whatsappUrl = `https://wa.me/923124447335?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    setIsSubmitted(true);

    setTimeout(() => {
      if (window.confirm("Would you like to send this message via WhatsApp?")) {
        window.open(whatsappUrl, "_blank");
      }
    }, 1500);

    // Reset form
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

  const contactInfo = [
    {
      icon: "📍",
      title: "Address",
      details: [
        "Shamim Hospital",
        "HMMP+9VF, Main bazar",
        "Mananwala",
      ],
    },
    {
      icon: "📞",
      title: "Phone Numbers",
      details: [
        "+92 312 4447335",
        "Emergency: +92 312 4447335",
      ],
    },
    {
      icon: "📧",
      title: "Email",
      details: [
        "info@shamimhospital.com",
        "appointments@shamimhospital.com",
        "lab@shamimhospital.com",
      ],
    },
    {
      icon: "🕒",
      title: "Working Hours",
      details: [
        "Monday - Saturday: 8:00 AM - 8:00 PM",
        "Sunday: 10:00 AM - 6:00 PM",
        "Emergency: 24/7",
      ],
    },
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">
          Get in touch with us for appointments, inquiries, or emergency
          services. We're here to help you 24/7.
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <div className="info-cards">
              {contactInfo.map((info, index) => (
                <div key={index} className="info-card">
                  <div className="info-icon">{info.icon}</div>
                  <div className="info-content">
                    <h4>{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx}>{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form-section">
            {isSubmitted ? (
              <div className="form-success">
                <div className="success-icon">✅</div>
                <h3>Message Sent Successfully!</h3>
                <p>
                  Thank you for contacting us. We'll get back to you within 24
                  hours.
                </p>
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
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select subject</option>
                      <option value="appointment">Appointment Inquiry</option>
                      <option value="lab">Lab Test Inquiry</option>
                      <option value="emergency">Emergency</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
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
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="map-section">
          <h3>Find Us on Map</h3>
          <div className="map-container">
            <div className="map-placeholder">
              <div className="map-content">
                <span className="map-icon">🗺️</span>
                <h4>Google Maps Integration</h4>
                <p>
                  Interactive map showing Shamim Hospital location will be
                  embedded here
                </p>
                <p>
                  <strong>Address:</strong> HMMP+9VF, Main bazar, Mananwala
                </p>
                <a
                  href="https://maps.google.com/?q=HMMP+9VF,+Main+bazar,+Mananwala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
