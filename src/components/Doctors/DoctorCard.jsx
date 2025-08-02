import React from "react";
import "./DoctorCard.css";

const DoctorCard = ({ doctor }) => {
  const scrollToAppointment = () => {
    const element = document.getElementById("appointment");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="doctor-card">
      <div className="doctor-image">
        <div className="image-container">
          <img
            src={doctor.photo}
            alt={`Dr. ${doctor.name}`}
            className="doctor-photo"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
          <div className="image-placeholder" style={{ display: "none" }}>
            {doctor.gender === "Male" ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            )}
            <p>Dr. {doctor.name}'s Photo</p>
          </div>
        </div>
        <div className="doctor-badge">{doctor.gender === "Male" ? "Male Doctor" : "Female Doctor"}</div>
      </div>

      <div className="doctor-info">
        <div className="doctor-header">
          <h3 className="doctor-name">{doctor.name}</h3>
          <div className="doctor-qualification-badge">{doctor.qualifications}</div>
        </div>
        <p className="doctor-specialization">{doctor.specialization}</p>

        <div className="doctor-details">
          <div className="detail-item">
            <div className="detail-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <div className="detail-content">
              <strong>Experience:</strong>
              <span>{doctor.experience}</span>
            </div>
          </div>

          <div className="detail-item">
            <div className="detail-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <div className="detail-content">
              <strong>Available:</strong>
              <span>{doctor.availableDays}</span>
            </div>
          </div>

          <div className="detail-item">
            <div className="detail-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <div className="detail-content">
              <strong>Timings:</strong>
              <span>{doctor.timings}</span>
            </div>
          </div>

          <div className="detail-item">
            <div className="detail-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </div>
            <div className="detail-content">
              <strong>Languages:</strong>
              <span>{doctor.languages}</span>
            </div>
          </div>
        </div>

        <div className="expertise">
          <div className="expertise-header">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <strong>Expertise:</strong>
          </div>
          <div className="expertise-tags">
            {doctor.expertise.map((skill, index) => (
              <span key={index} className="expertise-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <button className="btn book-btn" onClick={scrollToAppointment}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          Book Appointment with {doctor.name}
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;
