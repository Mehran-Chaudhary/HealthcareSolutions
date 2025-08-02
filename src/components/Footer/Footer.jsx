import React, { useEffect, useRef } from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("footer-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

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
    <footer ref={footerRef} className="footer">
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
                <div className="emergency-header">
                  <div className="emergency-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                  </div>
                  <h4>Emergency Contact</h4>
                </div>
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
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
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
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
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
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
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
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
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
                <div className="social-icon">
                  {social.name === "Facebook" ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  ) : social.name === "Twitter" ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  ) : social.name === "Instagram" ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                  )}
                </div>
                <span>{social.name}</span>
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
