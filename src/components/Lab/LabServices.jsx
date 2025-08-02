import React, { useState } from "react";
import "./LabServices.css";

const LabServices = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const labTests = [
    {
      id: 1,
      name: "Complete Blood Count (CBC)",
      category: "blood",
      price: "PKR 500",
      duration: "2-4 hours",
      description:
        "Comprehensive blood analysis including RBC, WBC, platelets, and hemoglobin levels",
      preparation: "No special preparation required",
      icon: "🩸",
    },
    {
      id: 2,
      name: "Blood Sugar (Fasting)",
      category: "blood",
      price: "PKR 200",
      duration: "1-2 hours",
      description: "Measures glucose levels in blood after fasting",
      preparation: "8-12 hours fasting required",
      icon: "🩸",
    },
    {
      id: 3,
      name: "Lipid Profile",
      category: "blood",
      price: "PKR 800",
      duration: "4-6 hours",
      description: "Cholesterol, triglycerides, HDL, and LDL levels",
      preparation: "12 hours fasting required",
      icon: "🩸",
    },
    {
      id: 4,
      name: "Liver Function Test (LFT)",
      category: "blood",
      price: "PKR 1200",
      duration: "4-6 hours",
      description: "Comprehensive liver health assessment",
      preparation: "No special preparation required",
      icon: "🩸",
    },
    {
      id: 5,
      name: "Kidney Function Test (KFT)",
      category: "blood",
      price: "PKR 1000",
      duration: "4-6 hours",
      description: "Creatinine, urea, and other kidney markers",
      preparation: "No special preparation required",
      icon: "🩸",
    },
    {
      id: 6,
      name: "Thyroid Profile (T3, T4, TSH)",
      category: "hormone",
      price: "PKR 1500",
      duration: "6-8 hours",
      description: "Complete thyroid function assessment",
      preparation: "No special preparation required",
      icon: "🧬",
    },
    {
      id: 7,
      name: "Urine Analysis",
      category: "urine",
      price: "PKR 300",
      duration: "1-2 hours",
      description:
        "Complete urine examination for infections and abnormalities",
      preparation: "Clean catch midstream sample",
      icon: "🧪",
    },
    {
      id: 8,
      name: "X-Ray Chest",
      category: "imaging",
      price: "PKR 800",
      duration: "30 minutes",
      description: "Chest X-ray for lung and heart examination",
      preparation: "Remove metal objects and jewelry",
      icon: "📷",
    },
    {
      id: 9,
      name: "ECG (Electrocardiogram)",
      category: "cardiac",
      price: "PKR 600",
      duration: "15 minutes",
      description: "Heart rhythm and electrical activity assessment",
      preparation: "No special preparation required",
      icon: "💓",
    },
    {
      id: 10,
      name: "HbA1c (Diabetes Monitoring)",
      category: "blood",
      price: "PKR 700",
      duration: "4-6 hours",
      description: "3-month average blood sugar levels",
      preparation: "No fasting required",
      icon: "🩸",
    },
  ];

  const categories = [
    { id: "all", name: "All Tests", icon: "🔬" },
    { id: "blood", name: "Blood Tests", icon: "🩸" },
    { id: "hormone", name: "Hormone Tests", icon: "🧬" },
    { id: "urine", name: "Urine Tests", icon: "🧪" },
    { id: "imaging", name: "Imaging", icon: "📷" },
    { id: "cardiac", name: "Cardiac Tests", icon: "💓" },
  ];

  const filteredTests =
    selectedCategory === "all"
      ? labTests
      : labTests.filter((test) => test.category === selectedCategory);

  const handleWhatsAppContact = () => {
    const message =
      "Hello! I would like to inquire about lab services and book a test.";
    const phoneNumber = "+923001234567"; // Replace with actual WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="lab-services" className="section lab-section">
      <div className="container">
        <h2 className="section-title">Laboratory Services</h2>
        <p className="section-subtitle">
          Comprehensive diagnostic services with accurate results and quick
          turnaround times. State-of-the-art equipment and experienced
          technicians ensure reliable testing.
        </p>

        {/* Enhanced Features Section */}
        <div className="lab-features">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Quick Results</h3>
            <p>Fast and accurate test results</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Accurate Testing</h3>
            <p>State-of-the-art equipment</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👨‍⚕️</div>
            <h3>Expert Staff</h3>
            <p>Experienced technicians</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Affordable Rates</h3>
            <p>Competitive pricing</p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${
                selectedCategory === category.id ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <span className="filter-icon">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Tests Grid */}
        <div className="tests-grid">
          {filteredTests.map((test) => (
            <div key={test.id} className="test-card">
              <div className="test-header">
                <div className="test-icon">{test.icon}</div>
                <div className="test-price">{test.price}</div>
              </div>
              <h3 className="test-name">{test.name}</h3>
              <p className="test-description">{test.description}</p>
              <div className="test-details">
                <div className="test-duration">
                  <span className="detail-icon">⏱️</span>
                  <span>Duration: {test.duration}</span>
                </div>
                <div className="test-preparation">
                  <span className="detail-icon">📋</span>
                  <span>Preparation: {test.preparation}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Actions */}
        <div className="contact-actions">
          <button className="btn" onClick={handleWhatsAppContact}>
            📱 Book Test via WhatsApp
          </button>
          <a href="#contact" className="btn btn-outline">
            📞 Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default LabServices;
