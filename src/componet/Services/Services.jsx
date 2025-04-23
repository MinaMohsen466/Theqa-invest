import React from 'react';
import { PiToolboxFill, PiPresentationChartFill  } from "react-icons/pi";
import { LuChartNoAxesCombined } from "react-icons/lu";
import './Services.css';

const Services = ({ language }) => {
  const services = [
    {
      icon: <LuChartNoAxesCombined className="service-icon" />,
      title: {
        en: <>Exclusive Investment <br /> Recommendations</>,
        ar: <>توصيات <br />استثمارية حصرية</>
      },
    },
    {
      icon: <PiPresentationChartFill className="service-icon" />,
      title: {
        en: <>Intensive Training <br /> Sessions</>,
        ar: <> جلسات <br /> تدريبية مكثفة</>
      },
    },
    {
      icon: <PiToolboxFill className="service-icon" />,
      title: {
        en: <>Creating a Diversified Global <br /> Investment Portfolio</>,
        ar: <>إنشاء محفظة <br />استثمارية عالمية متنوعة</>
      },
    }
  ];

  return (
    <div className={`services-container ${language ? 'rtl' : 'ltr'}`} id='testimonial'>
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