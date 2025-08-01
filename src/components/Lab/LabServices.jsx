import React, { useState } from "react";
import "./LabServices.css";

const LabServices = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const labTests = [
    {
      id: 1,
      name: "Complete Blood Count (CBC)",
      category: "blood",
      price: "₹500",
      duration: "2-4 hours",
      description:
        "Comprehensive blood analysis including RBC, WBC, platelets, and hemoglobin levels",
      preparation: "No special preparation required",
    },
    {
      id: 2,
      name: "Blood Sugar (Fasting)",
      category: "blood",
      price: "₹200",
      duration: "1-2 hours",
      description: "Measures glucose levels in blood after fasting",
      preparation: "8-12 hours fasting required",
    },
    {
      id: 3,
      name: "Lipid Profile",
      category: "blood",
      price: "₹800",
      duration: "4-6 hours",
      description: "Cholesterol, triglycerides, HDL, and LDL levels",
      preparation: "12 hours fasting required",
    },
    {
      id: 4,
      name: "Liver Function Test (LFT)",
      category: "blood",
      price: "₹1200",
      duration: "4-6 hours",
      description: "Comprehensive liver health assessment",
      preparation: "No special preparation required",
    },
    {
      id: 5,
      name: "Kidney Function Test (KFT)",
      category: "blood",
      price: "₹1000",
      duration: "4-6 hours",
      description: "Creatinine, urea, and other kidney markers",
      preparation: "No special preparation required",
    },
    {
      id: 6,
      name: "Thyroid Profile (T3, T4, TSH)",
      category: "hormone",
      price: "₹1500",
      duration: "6-8 hours",
      description: "Complete thyroid function assessment",
      preparation: "No special preparation required",
    },
    {
      id: 7,
      name: "Urine Analysis",
      category: "urine",
      price: "₹300",
      duration: "1-2 hours",
      description:
        "Complete urine examination for infections and abnormalities",
      preparation: "Clean catch midstream sample",
    },
    {
      id: 8,
      name: "X-Ray Chest",
      category: "imaging",
      price: "₹800",
      duration: "30 minutes",
      description: "Chest X-ray for lung and heart examination",
      preparation: "Remove metal objects and jewelry",
    },
    {
      id: 9,
      name: "ECG (Electrocardiogram)",
      category: "cardiac",
      price: "₹600",
      duration: "15 minutes",
      description: "Heart rhythm and electrical activity assessment",
      preparation: "No special preparation required",
    },
    {
      id: 10,
      name: "HbA1c (Diabetes Monitoring)",
      category: "blood",
      price: "₹700",
      duration: "4-6 hours",
      description: "3-month average blood sugar levels",
      preparation: "No fasting required",
    },
  ];

  const categories = [
    { id: "all", name: "All Tests", icon: "🧪" },
    { id: "blood", name: "Blood Tests", icon: "🩸" },
    { id: "hormone", name: "Hormone Tests", icon: "⚗️" },
    { id: "urine", name: "Urine Tests", icon: "🥤" },
    { id: "imaging", name: "Imaging", icon: "📷" },
    { id: "cardiac", name: "Cardiac Tests", icon: "❤️" },
  ];

  const filteredTests =
    selectedCategory === "all"
      ? labTests
      : labTests.filter((test) => test.category === selectedCategory);

  const handleBookTest = (testName) => {
    const whatsappMessage = `Hello Shamim Hospital! I would like to book a lab test:\n\nTest: ${testName}\n\nPlease let me know the available slots and any preparation required.`;
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="lab" className="section lab-section">
      <div className="container">
        <h2 className="section-title">Laboratory Services</h2>
        <p className="section-subtitle">
          State-of-the-art laboratory with accurate and timely test results. All
          tests are performed by certified technicians.
        </p>

        <div className="lab-features">
          <div className="feature-card">
            <span className="feature-icon">🔬</span>
            <h3>Advanced Equipment</h3>
            <p>Latest technology for accurate results</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">⚡</span>
            <h3>Quick Results</h3>
            <p>Fast turnaround time for all tests</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">👨‍🔬</span>
            <h3>Expert Technicians</h3>
            <p>Certified and experienced lab professionals</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">📱</span>
            <h3>Digital Reports</h3>
            <p>Online access to your test results</p>
          </div>
        </div>

        <div className="lab-content">
          <div className="category-filters">
            <h3>Test Categories</h3>
            <div className="filter-buttons">
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
          </div>

          <div className="tests-grid">
            {filteredTests.map((test) => (
              <div key={test.id} className="test-card">
                <div className="test-header">
                  <h4 className="test-name">{test.name}</h4>
                  <div className="test-price">{test.price}</div>
                </div>

                <div className="test-details">
                  <p className="test-description">{test.description}</p>

                  <div className="test-info">
                    <div className="info-item">
                      <strong>Duration:</strong> {test.duration}
                    </div>
                    <div className="info-item">
                      <strong>Preparation:</strong> {test.preparation}
                    </div>
                  </div>
                </div>

                <button
                  className="btn test-book-btn"
                  onClick={() => handleBookTest(test.name)}
                >
                  Book This Test
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="lab-contact">
          <div className="contact-card">
            <h3>Need Help Choosing Tests?</h3>
            <p>
              Our lab experts can help you select the right tests based on your
              symptoms and doctor's recommendations.
            </p>
            <div className="contact-actions">
              <a href="tel:+1234567890" className="btn">
                Call Lab Direct
              </a>
              <button
                className="btn btn-outline"
                onClick={() => handleBookTest("General Lab Consultation")}
              >
                WhatsApp Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabServices;
