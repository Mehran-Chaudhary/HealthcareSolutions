import React, { useEffect, useRef } from "react";
import DoctorCard from "./DoctorCard";
import "./DoctorProfiles.css";

const DoctorProfiles = () => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  const doctors = [
    {
      id: 1,
      name: "Dr. Waseem",
      gender: "Male",
      specialization: "General Medicine & Internal Medicine",
      qualifications: "MBBS, MD (Internal Medicine)",
      experience: "15+ Years Experience",
      availableDays: "Monday - Saturday",
      timings: "9:00 AM - 6:00 PM",
      languages: "English, Urdu, Hindi",
      expertise: [
        "Diabetes Management",
        "Hypertension Treatment",
        "Cardiac Care",
        "Preventive Medicine",
      ],
      photo: "/drwaseem.webp",
    },
    {
      id: 2,
      name: "Dr. Quratulain",
      gender: "Female",
      specialization: "Gynecology & Obstetrics",
      qualifications: "MBBS, FCPS (Gynecology)",
      experience: "12+ Years Experience",
      availableDays: "Monday - Friday",
      timings: "10:00 AM - 5:00 PM",
      languages: "English, Urdu",
      expertise: [
        "Women's Health",
        "Pregnancy Care",
        "Family Planning",
        "Reproductive Health",
      ],
      photo: "/quratulain.webp",
    },
  ];

  return (
    <section id="doctors" ref={sectionRef} className="section doctors-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Expert Doctors</h2>
          <p className="section-subtitle">
            Meet our experienced and dedicated medical professionals committed to
            providing you with the best healthcare
          </p>
        </div>

        <div className="doctors-grid">
          {doctors.map((doctor, index) => (
            <div 
              key={doctor.id} 
              className="doctor-card-wrapper animate-card"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <DoctorCard doctor={doctor} />
            </div>
          ))}
        </div>
        
        <div className="doctors-cta">
          <a href="#appointment" className="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            Book an Appointment
          </a>
        </div>
      </div>
    </section>
  );
};

export default DoctorProfiles;
