import React from 'react';
import './About-theqa.css';
import MrAhmed from '../../../public/IMG/Ahmad.webp';

const AboutTheqa = ({ language }) => {
  return (
    <div className={`about-theqa-container ${language ? 'rtl' : 'ltr'}`} id='about'>
      <div className="red-line-background"></div>
      <div className="about-theqa-content">
        <div className="about-theqa-text">
          <h2>{language ? 'عن ثقة' : 'About Theqa'}</h2>
          <p className="main-description">
            {language 
              ? <> هدفنا هو تمكينك من الاستثمار بثقة في الأسواق العالمية<br /> وبناء ثروة مستدامة على المدى الطويل. ابدأ معنا الآن <br />لتحقيق النجاح المالي الذي تطمح إليه!<br /><br /> جلسات فردية مع مدير استثمار لمناقشة الأهداف المالية الشخصية، <br />وتحمل المخاطر، وتطوير خطة استثمارية مخصصة. </>
              : <>Our goal is to empower you to invest confidently in global <br /> markets and build sustainable wealth for the long term. <br />Start with us now to achieve the financial success you aspire to!<br /><br />
              One-on-one sessions with an investment manager to discuss <br/>personal financial goals, risk tolerance, and to develop a <br/> customized investment plan</>}
          </p>
        </div>
        <div className="ceo-signature">
          <p className="ceo-name">{language ? 'م. أحمد المطوع' : 'Eng. Ahmad Al Mutawa'}</p>
          <p className="ceo-title">{language ? 'الرئيس التنفيذي ثقة للاستثمار - مرادر للخدمات' : 'CEO THEQA INVEST MURAADER SERVICES'}</p>
        </div>
      </div>
      <div className='MrAhmed'>
        <img src={MrAhmed} alt={language ? 'م. أحمد المطوع' : 'Eng. Ahmad Al Mutawa'} />
      </div>
    </div>
  );
};

export default AboutTheqa;