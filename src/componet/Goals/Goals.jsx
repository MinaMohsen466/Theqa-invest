import React from 'react';
import './Goals.css';
import Banner from '../../../public/IMG/Banner.png';
import { FaWhatsapp } from "react-icons/fa";

const Goals = ({ language }) => {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/98049957`, '_blank');
  };

  const goals = [
    {
      image: Banner,
      title: {
        en: 'Retirement Planning',
        ar: 'تخطيط التقاعد'
      },
      description: {
        en: 'Work along side an expert to design a strategy that fits your needs',
        ar: 'اعمل جنبًا إلى جنب مع خبير لتصميم استراتيجية تناسب احتياجاتك'
      },
      readMore: {
        en: 'Read more',
        ar: 'اقرأ المزيد'
      }
    },
    {
      image: Banner,
      title: {
        en: 'Establish your estate Plan',
        ar: 'إنشاء خطة العقارات الخاصة بك'
      },
      description: {
        en: 'Plan with an expert to get a best estate investment strategy in place',
        ar: 'خطط مع خبير للحصول على أفضل استراتيجية استثمار عقاري'
      },
      readMore: {
        en: 'Read more',
        ar: 'اقرأ المزيد'
      }
    },
    {
      image: Banner,
      title: {
        en: 'Plan your Kids Investment',
        ar: 'خطط لاستثمار أطفالك'
      },
      description: {
        en: 'Start Planning now so you\'re prepared for your childs education',
        ar: 'ابدأ التخطيط الآن حتى تكون مستعدًا لتعليم أطفالك'
      },
      readMore: {
        en: 'Read more',
        ar: 'اقرأ المزيد'
      }
    },
    {
      image: Banner,
      title: {
        en: 'Investment Recommendations',
        ar: 'توصيات الاستثمار'
      },
      description: {
        en: 'Develop a personalized strategy with an expert for profitable investment in global stocks',
        ar: 'طور استراتيجية مخصصة مع خبير للاستثمار المربح في الأسهم العالمية'
      },
      readMore: {
        en: 'Read more',
        ar: 'اقرأ المزيد'
      }
    }
  ];

  return (
    <div className={`goals-container ${language ? 'rtl' : 'ltr'}`}>
      <div className="goals-header">
        <h2>{language ? 'أي هدف حققته؟' : 'Which goal have you accomplished?'}</h2>
      </div>
      <div className="goals-grid">
        {goals.map((goal, index) => (
          <div className="goal-card" key={index}>
            <div className="goal-image-container">
              <img src={goal.image} alt={language ? goal.title.ar : goal.title.en} className="goal-image" />
            </div>
            <div className="goal-content">
              <h3 className="goal-title">
                {language ? goal.title.ar : goal.title.en}
              </h3>
              <p className="goal-description">
                {language ? goal.description.ar : goal.description.en}
              </p>
              <a href="#" className="goal-read-more">
                {language ? goal.readMore.ar : goal.readMore.en}
              </a>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleWhatsAppClick} className="floating-whatsapp-button" aria-label="Contact on WhatsApp">
        <FaWhatsapp />
      </button>
    </div>
  );
};

export default Goals;