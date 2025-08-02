import React, { useState } from "react";
import "./AppointmentBooking.css";

const AppointmentBooking = () => {
  const [formData, setFormData] = useState({
    doctor: "",
    patientName: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    reason: "",
    gender: "",
    age: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const doctors = [
    { id: "waseem", name: "Dr. Waseem", specialization: "General Medicine" },
    {
      id: "quratulain",
      name: "Dr. Quratulain",
      specialization: "Gynecology & Obstetrics",
    },
  ];

  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
  ];

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
    const message = `New Appointment Request:

Doctor: ${formData.doctor}
Patient: ${formData.patientName}
Phone: ${formData.phone}
Email: ${formData.email}
Gender: ${formData.gender}
Age: ${formData.age}
Preferred Date: ${formData.date}
Preferred Time: ${formData.time}
Reason: ${formData.reason}`;

    const phoneNumber = "+923001234567"; // Replace with actual WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    // Show success message
    setIsSubmitted(true);

    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        doctor: "",
        patientName: "",
        phone: "",
        email: "",
        date: "",
        time: "",
        reason: "",
        gender: "",
        age: "",
      });
    }, 5000);
  };

  if (isSubmitted) {
    return (
      <section id="appointment" className="section appointment-section">
        <div className="container">
          <div className="success-message">
            <div className="success-icon">✅</div>
            <h2>Appointment Request Submitted!</h2>
            <p>
              Thank you {formData.patientName}! We have received your
              appointment request.
            </p>
            <p>
              Our team will contact you shortly to confirm your appointment with{" "}
              {formData.doctor}.
            </p>
            <div className="success-details">
              <p>
                <strong>Requested Date:</strong> {formData.date}
              </p>
              <p>
                <strong>Requested Time:</strong> {formData.time}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="appointment" className="section appointment-section">
      <div className="container">
        <h2 className="section-title">Book Your Appointment</h2>
        <p className="section-subtitle">
          Schedule your visit with our expert doctors. Fill out the form below
          and we'll confirm your appointment.
        </p>

        <div className="appointment-content">
          <div className="appointment-form-container">
            <form className="appointment-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="doctor">Select Doctor *</label>
                  <select
                    id="doctor"
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Choose a doctor</option>
                    {doctors.map((doctor) => (
                      <option key={doctor.id} value={doctor.name}>
                        {doctor.name} - {doctor.specialization}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="patientName">Patient Name *</label>
                  <input
                    type="text"
                    id="patientName"
                    name="patientName"
                    value={formData.patientName}
                    onChange={handleInputChange}
                    placeholder="Enter full name"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter phone number"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter email address"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="gender">Gender *</label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="age">Age *</label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    placeholder="Enter age"
                    min="1"
                    max="120"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date">Preferred Date *</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split("T")[0]}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="time">Preferred Time *</label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select time slot</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="reason">Reason for Visit</label>
                  <textarea
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleInputChange}
                    placeholder="Briefly describe your symptoms or reason for visit"
                    rows="4"
                  ></textarea>
                </div>
              </div>

              <button type="submit" className="btn submit-btn">
                📅 Book Appointment
              </button>
            </form>
          </div>
        </div>

        {/* Why Choose Online Booking - Moved Below Form */}
        <div className="why-choose-section">
          <h3>Why Choose Online Booking?</h3>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">⏰</div>
              <div>
                <h4>Save Time</h4>
                <p>No need to wait in long queues</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">📅</div>
              <div>
                <h4>Choose Your Slot</h4>
                <p>Pick the most convenient time</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">💬</div>
              <div>
                <h4>WhatsApp Confirmation</h4>
                <p>Get instant confirmation via WhatsApp</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🔒</div>
              <div>
                <h4>Secure & Private</h4>
                <p>Your information is safe with us</p>
              </div>
            </div>
          </div>
        </div>

        <p className="form-note">
          * Required fields. You will receive a confirmation via WhatsApp after
          submitting this form.
        </p>
      </div>
    </section>
  );
};

export default AppointmentBooking;
