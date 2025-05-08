import React, { useState, useEffect, useRef } from 'react';
import './Statistics.css';
import { useNavigate } from 'react-router-dom';

const Statistics = ({ language }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate();
    const handleBookAppointment = () => {
        navigate('/book-appointment');
    }
  
  // Stats data
  const stats = [
    {
      value: 1500,
      suffix: '+',
      description: {
        en: 'Investors, as of March 2025',
        ar: 'مستثمر، اعتبارًا من مارس 2025'
      }
    },
    {
      value: 99,
      suffix: '%',
      description: {
        en: <>Investors have seen profitable <br />investment returns</>,
        ar: 'من المستثمرين حققوا عوائد استثمارية مربحة'
      }
    }
  ];

  // Animation for counting up
  const [counters, setCounters] = useState([0, 0]);
  // Intersection Observer to trigger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
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
  
  // Counter animation effect
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // Animation duration in ms
    const startTime = performance.now();
    
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      setCounters([
        Math.floor(progress * stats[0].value),
        Math.floor(progress * stats[1].value)
      ]);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isVisible]);

  return (
    <div className={`statistics-container ${language ? 'rtl' : 'ltr'} ${isVisible ? 'in-view' : ''}`} ref={sectionRef}>
      <div className="statistics-content">
        <div className="statistics-text">
          <h2>{language ? 'أنت في المكان الصحيح' : 'You\'re in the right place'}</h2>
          <p>{language ? 'ابدأ الاستثمار في أهدافك اليوم' : 'Start investing in your goals today'}</p>
          <button className="appointment-button" onClick={handleBookAppointment}>
            {language ? 'احجز موعدًا' : 'Book An Appointment'}
          </button>
        </div>
        <div className="statistics-numbers">
          {stats.map((stat, index) => (
            <div className="stat-item" key={index}>
              <div className="stat-value">
                <span className="counter">
                  {index === 0 && counters[index] >= 1000 
                    ? `${(counters[index]/1000).toFixed(1)}K` 
                    : counters[index]}
                </span>
                <span className="suffix">{stat.suffix}</span>
              </div>
              <p className="stat-description">
                {language ? stat.description.ar : stat.description.en}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;