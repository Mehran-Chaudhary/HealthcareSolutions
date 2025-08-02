import React from "react";
import "./Hero.css";

const Hero = () => {
  const scrollToAppointment = () => {
    const element = document.getElementById("appointment");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const doctorHighlights = [
    {
      doctor: "Dr. Waseem",
      achievement: "MBBS, MD Internal Medicine",
      experience: "15+ Years Experience",
      specialty: "Expert in General Medicine & Internal Medicine",
      gender: "male",
    },
    {
      doctor: "Dr. Quratulain",
      achievement: "MBBS, FCPS Gynecology",
      experience: "12+ Years Experience",
      specialty: "Specialist in Women's Health & Obstetrics",
      gender: "female",
    },
  ];

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-pattern"></div>
        <div className="floating-elements">
          <div className="element element-1"></div>
          <div className="element element-2"></div>
          <div className="element element-3"></div>
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span>Manwala's Most Trusted Healthcare Center</span>
            </div>

            <h1>
              <span className="highlight">Expert Medical Care</span>
              <br />
              by <span className="gradient-text">Renowned Doctors</span>
            </h1>

            <p>
              Experience exceptional healthcare with Dr. Waseem (General
              Medicine) and Dr. Quratulain (Gynecology) - Manwala's most
              experienced and trusted medical professionals providing
              world-class treatment.
            </p>

            {/* Doctor Highlights */}
            <div className="doctor-highlights">
              {doctorHighlights.map((doctor, index) => (
                <div key={index} className="doctor-card">
                  <div className="doctor-header">
                    <h4>{doctor.doctor}</h4>
                    <span className="qualification">{doctor.achievement}</span>
                  </div>
                  <div className="doctor-details">
                    <span className="experience">{doctor.experience}</span>
                    <span className="specialty">{doctor.specialty}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="hero-actions">
              <button
                className="btn btn-primary-large"
                onClick={scrollToAppointment}
              >
                <span>Book Appointment</span>
                <div className="btn-arrow">→</div>
              </button>
              <a href="#contact" className="btn btn-outline-modern">
                <span>Contact Us</span>
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Successful Treatments</span>
              </div>
              <div className="stat">
                <span className="stat-number">27+</span>
                <span className="stat-label">Years Combined Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Emergency Services</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            {/* Reserved space for future photos */}
            <div className="photos-placeholder">
              <div className="placeholder-content">
                <div className="placeholder-icon">📷</div>
                <h3>Doctor Photos</h3>
                <p>Professional photos will be added here</p>
              </div>
            </div>

            <div className="credentials-banner">
              <div className="credential-item">
                <strong>Dr. Waseem:</strong> MD Internal Medicine, Diabetes &
                Hypertension Specialist
              </div>
              <div className="credential-item">
                <strong>Dr. Quratulain:</strong> FCPS Gynecology, Expert in
                Women's Health
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
