import React, { useState, useEffect, useRef } from "react";
import "./LabServices.css";

const LabServices = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
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
    <section id="lab-services" ref={sectionRef} className="section lab-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Laboratory Services</h2>
          <p className="section-subtitle">
            Comprehensive diagnostic services with accurate results and quick
            turnaround times. State-of-the-art equipment and experienced
            technicians ensure reliable testing.
          </p>
        </div>

        {/* Enhanced Features Section */}
        <div className="lab-features">
          <div className="feature-card">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
              </svg>
            </div>
            <h3>Quick Results</h3>
            <p>Fast and accurate test results</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="6"></circle>
                <circle cx="12" cy="12" r="2"></circle>
              </svg>
            </div>
            <h3>Accurate Testing</h3>
            <p>State-of-the-art equipment</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <h3>Expert Staff</h3>
            <p>Experienced technicians</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="M12 16v.01"></path>
                <path d="M6 12v.01"></path>
                <path d="M18 8v.01"></path>
                <path d="M12 8v.01"></path>
                <path d="M18 12v.01"></path>
                <path d="M6 8v.01"></path>
              </svg>
            </div>
            <h3>Affordable Rates</h3>
            <p>Competitive pricing</p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="category-filters">
          <div className="filter-buttons">
            {categories.map((category) => {
              let icon;
              switch(category.id) {
                case 'blood':
                  icon = (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v7a2 2 0 0 0 2 2h7a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-7a2 2 0 0 0-2-2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7a2 2 0 0 1 1 .29z"></path>
                    </svg>
                  );
                  break;
                case 'hormone':
                  icon = (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                    </svg>
                  );
                  break;
                case 'urine':
                  icon = (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v6"></path>
                      <path d="M5 8h14"></path>
                      <path d="M5.23 14.85C6.2 17.24 8.93 19 12 19c3.61 0 6.67-2.49 7.44-5.86"></path>
                    </svg>
                  );
                  break;
                case 'imaging':
                  icon = (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <circle cx="8.5" cy="8.5" r="1.5"></circle>
                      <polyline points="21 15 16 10 5 21"></polyline>
                    </svg>
                  );
                  break;
                case 'cardiac':
                  icon = (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                    </svg>
                  );
                  break;
                default:
                  icon = (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="16"></line>
                      <line x1="8" y1="12" x2="16" y2="12"></line>
                    </svg>
                  );
              }
              
              return (
                <button
                  key={category.id}
                  className={`filter-btn ${selectedCategory === category.id ? "active" : ""}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <span className="filter-icon">{icon}</span>
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tests Grid */}
        <div className="tests-grid">
          {filteredTests.map((test, index) => (
            <div 
              key={test.id} 
              className="test-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="test-header">
                <div className="test-icon">
                  {test.category === 'blood' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v7a2 2 0 0 0 2 2h7a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-7a2 2 0 0 0-2-2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7a2 2 0 0 1 1 .29z"></path>
                    </svg>
                  ) : test.category === 'hormone' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                    </svg>
                  ) : test.category === 'urine' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v6"></path>
                      <path d="M5 8h14"></path>
                      <path d="M5.23 14.85C6.2 17.24 8.93 19 12 19c3.61 0 6.67-2.49 7.44-5.86"></path>
                    </svg>
                  ) : test.category === 'imaging' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <circle cx="8.5" cy="8.5" r="1.5"></circle>
                      <polyline points="21 15 16 10 5 21"></polyline>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                    </svg>
                  )}
                </div>
                <div className="test-price">{test.price}</div>
              </div>
              <h3 className="test-name">{test.name}</h3>
              <p className="test-description">{test.description}</p>
              <div className="test-details">
                <div className="test-duration">
                  <span className="detail-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </span>
                  <span>Duration: {test.duration}</span>
                </div>
                <div className="test-preparation">
                  <span className="detail-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </span>
                  <span>Preparation: {test.preparation}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Actions */}
        <div className="contact-actions">
          <button className="btn btn-primary" onClick={handleWhatsAppContact}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            Book Test via WhatsApp
          </button>
          <a href="#contact" className="btn btn-outline">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default LabServices;
