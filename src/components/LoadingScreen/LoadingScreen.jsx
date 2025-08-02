import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [loadingText, setLoadingText] = useState('Initializing...');

  useEffect(() => {
    const loadingSteps = [
      { progress: 25, text: 'Loading Services...' },
      { progress: 50, text: 'Preparing Doctors...' },
      { progress: 75, text: 'Setting Up...' },
      { progress: 100, text: 'Welcome!' }
    ];

    let currentStep = 0;
    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 4; // Faster increment
        
        // Update loading text based on progress
        if (currentStep < loadingSteps.length && newProgress >= loadingSteps[currentStep].progress) {
          setLoadingText(loadingSteps[currentStep].text);
          currentStep++;
        }
        
        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            onLoadingComplete();
          }, 300); // Reduced from 800ms
          return 100;
        }
        return newProgress;
      });
    }, 30); // Reduced from 60ms

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className="loading-screen">
      <div className="loading-container">
        {/* Professional Medical Logo */}
        <div className="logo-container">
          <div className="medical-symbol">
            <div className="heartbeat-line">
              <svg viewBox="0 0 200 50" className="heartbeat-svg">
                <polyline 
                  points="0,25 20,25 25,15 30,35 35,5 40,45 45,25 200,25" 
                  className="heartbeat-path"
                />
              </svg>
            </div>
            <div className="medical-cross-modern">
              <div className="cross-h"></div>
              <div className="cross-v"></div>
            </div>
          </div>
          <div className="glow-ring"></div>
        </div>
        
        {/* Hospital Name with Professional Typography */}
        <div className="brand-container">
          <h1 className="hospital-name-modern">
            <span className="brand-text">SHAMIM</span>
            <span className="brand-subtitle">HOSPITAL</span>
          </h1>
          <p className="tagline">Excellence in Healthcare</p>
        </div>
        
        {/* Modern Progress Indicator */}
        <div className="progress-section">
          <div className="progress-ring">
            <svg className="progress-svg" viewBox="0 0 120 120">
              <circle 
                cx="60" 
                cy="60" 
                r="50" 
                className="progress-bg"
              />
              <circle 
                cx="60" 
                cy="60" 
                r="50" 
                className="progress-bar-circle"
                style={{
                  strokeDasharray: `${2 * Math.PI * 50}`,
                  strokeDashoffset: `${2 * Math.PI * 50 * (1 - progress / 100)}`
                }}
              />
            </svg>
            <div className="progress-text">
              <span className="progress-number">{progress}%</span>
            </div>
          </div>
          
          <div className="loading-status">
            <p className="status-text">{loadingText}</p>
            <div className="dots-animation">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </div>
        
        {/* Subtle Background Elements */}
        <div className="bg-elements">
          <div className="element element-1"></div>
          <div className="element element-2"></div>
          <div className="element element-3"></div>
          <div className="element element-4"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
