import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import DoctorProfiles from "./components/Doctors/DoctorProfiles";
import AppointmentBooking from "./components/Appointment/AppointmentBooking";
import LabServices from "./components/Lab/LabServices";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import WhatsAppButton from "./components/WhatsApp/WhatsAppButton";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <DoctorProfiles />
      <AppointmentBooking />
      <LabServices />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
