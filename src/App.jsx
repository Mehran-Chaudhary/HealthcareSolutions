import React, { useState } from "react";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
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
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="App">
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}

      <div className={`main-content ${isLoading ? "hidden" : "visible"}`}>
        <Header />
        <Hero />
        <DoctorProfiles />
        <AppointmentBooking />
        <LabServices />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  );
}

export default App;
