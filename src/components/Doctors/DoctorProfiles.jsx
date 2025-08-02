import React from "react";
import DoctorCard from "./DoctorCard";
import "./DoctorProfiles.css";

const DoctorProfiles = () => {
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
    <section id="doctors" className="section doctors-section">
      <div className="container">
        <h2 className="section-title">Our Expert Doctors</h2>
        <p className="section-subtitle">
          Meet our experienced and dedicated medical professionals committed to
          providing you with the best healthcare
        </p>

        <div className="doctors-grid">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorProfiles;
