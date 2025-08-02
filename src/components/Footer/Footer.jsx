import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    hospital: {
      title: "Shamim Hospital",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Our Doctors", href: "#doctors" },
        { name: "Services", href: "#services" },
        { name: "Emergency Care", href: "#emergency" },
      ],
    },
    services: {
      title: "Our Services",
      links: [
        { name: "General Medicine", href: "#general" },
        { name: "Gynecology", href: "#gynecology" },
        { name: "Laboratory Tests", href: "#lab" },
        { name: "Health Checkups", href: "#checkup" },
      ],
    },
    quickLinks: {
      title: "Quick Links",
      links: [
        { name: "Book Appointment", href: "#appointment" },
        { name: "Lab Reports", href: "#reports" },
        { name: "Contact Us", href: "#contact" },
        { name: "Patient Portal", href: "#portal" },
      ],
    },
  };

  const socialLinks = [
    {
      name: "Facebook",
      icon: "/facebook.png",
      href: "https://facebook.com/shamimhospital",
    },
    {
      name: "Instagram",
      icon: "/instagram.jpeg",
      href: "https://instagram.com/shamimhospital",
    },
    { 
      name: "Twitter", 
      icon: "/twitter.png", 
      href: "https://twitter.com/shamimhospital" 
    },
    {
      name: "WhatsApp",
      icon: "/whatsapp.jpeg",
      href: "https://wa.me/923124447335",
    },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h3>Shamim Hospital</h3>
              <p>Your Health, Our Priority</p>
              <p className="footer-description">
                Providing exceptional medical care with compassion and
                expertise. We are committed to serving our community with the
                highest standards of healthcare.
              </p>

              <div className="emergency-info">
                <h4>🚨 Emergency Contact</h4>
                <a href="tel:+923124447335" className="emergency-number">
                  +92 312 444-7335
                </a>
                <p>Available 24/7 for emergencies</p>
              </div>
            </div>

            <div className="footer-sections">
              {Object.entries(footerSections).map(([key, section]) => (
                <div key={key} className="footer-section">
                  <h4>{section.title}</h4>
                  <ul>
                    {section.links.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(link.href);
                          }}
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="footer-contact">
            <h4>Contact Information</h4>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <strong>Address:</strong>
                  <p>
                    HMMP+9VF, Main bazar
                    <br />
                    Mananwala
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <strong>Phone:</strong>
                  <p>
                    +92 312 444-7335
                    <br />
                    Emergency: +92 312 444-7335
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <strong>Email:</strong>
                  <p>
                    info@shamimhospital.com
                    <br />
                    appointments@shamimhospital.com
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">🕒</span>
                <div>
                  <strong>Hours:</strong>
                  <p>
                    Mon-Sat: 8:00 AM - 8:00 PM
                    <br />
                    Sun: 10:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title={social.name}
              >
                <img 
                  src={social.icon} 
                  alt={social.name} 
                  style={{width: '20px', height: '20px', borderRadius: '4px'}} 
                />
                {social.name}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Shamim Hospital. All rights reserved.</p>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#disclaimer">Medical Disclaimer</a>
            </div>
          </div>

          <div className="footer-certifications">
            <p>
              🏥 Licensed Healthcare Facility | 🔒 HIPAA Compliant | ⭐ ISO
              Certified
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
