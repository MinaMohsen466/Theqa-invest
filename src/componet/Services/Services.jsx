import React from 'react';
import { FaChartLine, FaGraduationCap, FaGlobeAmericas } from 'react-icons/fa';
import './Services.css';

const Services = ({ language }) => {
  const services = [
    {
      icon: <FaChartLine className="service-icon" />,
      title: {
        en: 'Exclusive Investment Recommendations',
        ar: 'توصيات استثمارية حصرية'
      },
    },
    {
      icon: <FaGraduationCap className="service-icon" />,
      title: {
        en: 'Intensive Training Sessions',
        ar: 'جلسات تدريبية مكثفة'
      },
    },
    {
      icon: <FaGlobeAmericas className="service-icon" />,
      title: {
        en: 'Creating a Diversified Global Investment Portfolio',
        ar: 'إنشاء محفظة استثمارية عالمية متنوعة'
      },
    }
  ];

  return (
    <div className={`services-container ${language ? 'rtl' : 'ltr'}`}>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon-container">
              {service.icon}
            </div>
            <h3 className="service-title">
              {language ? service.title.ar : service.title.en}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;