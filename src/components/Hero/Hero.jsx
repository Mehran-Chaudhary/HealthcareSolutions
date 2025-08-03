import React, { useEffect, useRef } from "react";
import "./Hero.css";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.classList.add("animate-in");
    }

    const animateElements = () => {
      const elements = heroElement.querySelectorAll(".animate-item");
      elements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add("animate-visible");
        }, 200 * (index + 1));
      });
    };

    setTimeout(animateElements, 300);
  }, []);
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
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-background">
        <div className="hero-pattern"></div>
        <div className="floating-elements">
          <div className="element element-1"></div>
          <div className="element element-2"></div>
          <div className="element element-3"></div>
          <div className="element element-4"></div>
          <div className="element element-5"></div>
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge animate-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span>Manwala's Most Trusted Healthcare Center</span>
            </div>

            <h1 className="animate-item">
              <span className="highlight">Expert Medical Care</span>
              <br />
              by <span className="gradient-text">Renowned Doctors</span>
            </h1>

            <p className="animate-item">
              Experience exceptional healthcare with Dr. Waseem (General
              Medicine) and Dr. Quratulain (Gynecology) - Manwala's most
              experienced and trusted medical professionals providing
              world-class treatment with personalized care.
            </p>

            {/* Doctor Highlights */}
            <div className="doctor-highlights animate-item">
              {doctorHighlights.map((doctor, index) => (
                <div key={index} className="doctor-card">
                  <div className="doctor-header">
                    <div className="doctor-avatar">
                      {doctor.gender === "male" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      )}
                    </div>
                    <div>
                      <h4>{doctor.doctor}</h4>
                      <span className="qualification">
                        {doctor.achievement}
                      </span>
                    </div>
                  </div>
                  <div className="doctor-details">
                    <span className="experience">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      {doctor.experience}
                    </span>
                    <span className="specialty">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      {doctor.specialty}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="hero-actions animate-item">
              <button
                className="btn btn-primary-large"
                onClick={scrollToAppointment}
              >
                <span>Book Appointment</span>
                <div className="btn-arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </button>
              <a href="#contact" className="btn btn-outline-modern">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Contact Us</span>
              </a>
            </div>

            <div className="hero-stats animate-item">
              <div className="stat">
                <div className="stat-icon">
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
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div>
                  <span className="stat-number">1000+</span>
                  <span className="stat-label">Successful Treatments</span>
                </div>
              </div>
              <div className="stat">
                <div className="stat-icon">
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
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div>
                  <span className="stat-number">27+</span>
                  <span className="stat-label">Years Combined Experience</span>
                </div>
              </div>
              <div className="stat">
                <div className="stat-icon">
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
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div>
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Emergency Services</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-visual animate-item">
            {/* Modern visual representation */}
            <div className="hero-visual-content">
              <div className="visual-card">
                <div className="visual-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h3>Expert Care</h3>
                <p>
                  Specialized medical services with a focus on quality and
                  patient comfort
                </p>
              </div>

              <div className="doctor-avatars">
                <div className="doctor-avatar-card male">
                  <div className="avatar-placeholder">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h4>Dr. Waseem</h4>
                  <p>General Medicine</p>
                </div>

                <div className="doctor-avatar-card female">
                  <div className="avatar-placeholder">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h4>Dr. Quratulain</h4>
                  <p>Gynecology</p>
                </div>
              </div>
            </div>

            <div className="credentials-banner">
              <div className="credential-item">
                <div className="credential-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div>
                  <strong>Dr. Waseem:</strong> MD Internal Medicine, Diabetes &
                  Hypertension Specialist
                </div>
              </div>
              <div className="credential-item">
                <div className="credential-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div>
                  <strong>Dr. Quratulain:</strong> FCPS Gynecology, Expert in
                  Women's Health
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

//COMMENT ADDED IN THE HERO
