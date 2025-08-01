import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToAppointment = () => {
    const element = document.getElementById('appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const doctorHighlights = [
    {
      doctor: 'Dr. Wasim',
      achievement: 'MBBS, FCPS Gynecology',
      experience: '15+ Years Experience',
      specialty: 'Expert in High-Risk Pregnancies'
    },
    {
      doctor: 'Dr. Quratulain',
      achievement: 'MBBS, MD Medicine',
      experience: '12+ Years Experience', 
      specialty: 'Specialist in Internal Medicine'
    }
  ];

  const services = [
    {
      title: 'Gynecology & Obstetrics',
      description: 'Complete women healthcare by Dr. Wasim',
      features: ['Normal & C-Section Deliveries', 'Pregnancy Care', 'Gynecological Surgeries']
    },
    {
      title: 'General Medicine',
      description: 'Comprehensive medical care by Dr. Quratulain',
      features: ['Diabetes Management', 'Hypertension Treatment', 'General Health Checkups']
    },
    {
      title: 'Advanced Laboratory',
      description: 'State-of-the-art diagnostic services',
      features: ['Blood Tests', 'Ultrasound', 'ECG & X-Ray']
    }
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
              <span className="badge-icon">🏥</span>
              <span>Manwala's Most Trusted Healthcare Center</span>
            </div>
            
            <h1>
              <span className="highlight">Expert Medical Care</span>
              <br />
              by <span className="gradient-text">Renowned Doctors</span>
            </h1>
            
            <p>
              Experience exceptional healthcare with Dr. Wasim (Gynecologist) and Dr. Quratulain (General Physician) - 
              Manwala's most experienced and trusted medical professionals providing world-class treatment.
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
              <button className="btn btn-primary-large" onClick={scrollToAppointment}>
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
                <span className="stat-label">Successful Deliveries</span>
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
            <div className="services-showcase">
              <h3>Our Specialized Services</h3>
              <div className="services-grid">
                {services.map((service, index) => (
                  <div key={index} className="service-card">
                    <div className="service-header">
                      <h4>{service.title}</h4>
                      <p>{service.description}</p>
                    </div>
                    <ul className="service-features">
                      {service.features.map((feature, idx) => (
                        <li key={idx}>
                          <span className="check-icon">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              
              <div className="credentials-banner">
                <div className="credential-item">
                  <strong>Dr. Wasim:</strong> FCPS Gynecology, Expert in Laparoscopic Surgery
                </div>
                <div className="credential-item">
                  <strong>Dr. Quratulain:</strong> MD Medicine, Diabetes & Hypertension Specialist
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