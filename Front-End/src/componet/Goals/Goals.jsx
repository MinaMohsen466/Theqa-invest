import React from 'react';
import './Goals.css';
import retirementImg from '../../../public/IMG/Retirement Planning.webp';
import estateplanImg from '../../../public/IMG/Real Estate.webp';
import kidsInvestmentImg from '../../../public/IMG/Kids Investment.webp';
import InvertmentRecoImg from '../../../public/IMG/Invst Recommd.webp';
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Goals = ({ language }) => {
  const navigate = useNavigate();
  
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/98049957`, '_blank');
  };
  
  const handleReadMoreClick = (index) => {
    if (language) {
      // Arabic routes
      switch (index) {
        case 0:
          navigate('/تخطيط-التقاعد');
          break;
        case 1:
          navigate('/خطة-العقارات');
          break;
        case 2:
          navigate('/استثمار-للاطفال');
          break;
        case 3:
          navigate('/توصيات-استثمارية');
          break;
      }
    } else {
      // English routes
      switch (index) {
        case 0:
          navigate('/retirement-planning');
          break;
        case 1:
          navigate('/Estateplan');
          break;
        case 2:
          navigate('/KidsInvestment');
          break;
        case 3:
          navigate('/InvertmentReco');
          break;
      }
    }
  };

  const goals = [
    {
      image: retirementImg,
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
      image: estateplanImg,
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
      image: kidsInvestmentImg,
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
      image: InvertmentRecoImg,
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
        <button onClick={handleWhatsAppClick} className="Goals-floating-whatsapp-button" aria-label="Contact on WhatsApp">
        <FaWhatsapp />
        </button>
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
              <a href="#" className="goal-read-more" onClick={(e) => {
                e.preventDefault();
                handleReadMoreClick(index);
              }}>
                {language ? goal.readMore.ar : goal.readMore.en}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Goals;