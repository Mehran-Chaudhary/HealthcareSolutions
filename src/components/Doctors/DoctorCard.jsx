import React from 'react';
import './DoctorCard.css';

const DoctorCard = ({ doctor }) => {
  const scrollToAppointment = () => {
    const element = document.getElementById('appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="doctor-card">
      <div className="doctor-image">
        <div className="image-placeholder">
          <span>{doctor.gender === 'Male' ? '👨‍⚕️' : '👩‍⚕️'}</span>
          <p>Dr. {doctor.name}'s Photo</p>
        </div>
      </div>
      
      <div className="doctor-info">
        <h3 className="doctor-name">{doctor.name}</h3>
        <p className="doctor-specialization">{doctor.specialization}</p>
        
        <div className="doctor-details">
          <div className="detail-item">
            <strong>Qualifications:</strong>
            <span>{doctor.qualifications}</span>
          </div>
          
          <div className="detail-item">
            <strong>Experience:</strong>
            <span>{doctor.experience}</span>
          </div>
          
          <div className="detail-item">
            <strong>Available:</strong>
            <span>{doctor.availableDays}</span>
          </div>
          
          <div className="detail-item">
            <strong>Timings:</strong>
            <span>{doctor.timings}</span>
          </div>
          
          <div className="detail-item">
            <strong>Languages:</strong>
            <span>{doctor.languages}</span>
          </div>
        </div>
        
        <div className="expertise">
          <strong>Expertise:</strong>
          <div className="expertise-tags">
            {doctor.expertise.map((skill, index) => (
              <span key={index} className="expertise-tag">{skill}</span>
            ))}
          </div>
        </div>
        
        <button className="btn book-btn" onClick={scrollToAppointment}>
          Book Appointment with {doctor.name}
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;