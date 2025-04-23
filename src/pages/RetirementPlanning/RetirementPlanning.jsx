import React from 'react';
import './RetirementPlanning.css';
import retirementImage from '../../../public/IMG/temp.png';
import { FaWhatsapp } from "react-icons/fa";

const RetirementPlanning = ({ language }) => {
    const handleWhatsAppClick = () => {
        window.open(`https://wa.me/98049957`, '_blank');
      };

    return(
    <div className={`retirement-planning-container ${language ? 'rtl' : 'ltr'}`}>
        <div className='retirement-banner'>
            <img src={retirementImage} alt={language ? "زوجان مسنان يستمتعان بالتقاعد على الشاطئ" : "Elderly couple enjoying retirement at beach"} />
        </div>
        <button onClick={handleWhatsAppClick} className="floating-whatsapp-button" aria-label={language ? "تواصل عبر واتساب" : "Contact on WhatsApp"}>
            <FaWhatsapp />
        </button>
        <div className='retirement-content'>
            <h2>{language ? "تخطيط التقاعد" : "Retirement Planning"}</h2>
            <div className='retirement-text'>
                <p>
                    {language 
                        ? "استثمر في الأسهم من خلال محفظة آمنة لبناء الثروة للتقاعد: من خلال اختيار منصة موثوقة ذات أرباح مضمونة، يمكنك إنشاء مصدر دخل ثابت لدعم احتياجاتك المالية في وقت لاحق من حياتك."
                        : "Invest in stocks through a secure wallet to build wealth for retirement: by choosing using a trusted platform with guaranteed profits, you can create a steady income stream to support your financial needs later in life."}
                </p>
                <p>
                    {language 
                        ? "استثمارات الأسهم، خاصة عندما تكون متنوعة ومُدارة بشكل آمن، توفر إمكانية تحقيق عوائد أعلى مقارنة بخيارات التوفير التقليدية."
                        : "Stock investments, especially when diversified and managed securely, offer the potential for higher returns compared to traditional savings options."}
                </p>
                <p>
                    {language 
                        ? "مع اقترابك من التقاعد، يمكن أن يكمل الدخل من استثماراتك أموال تقاعدك، مما يوفر الاستقرار المالي والحرية. مع محفظة آمنة مضمونة الربح، تقلل المخاطر وتضمن راحة البال أثناء تخطيطك للمستقبل. باختصار، إنها استراتيجية موثوقة للأمن المالي على المدى الطويل."
                        : "As you near retirement, the income from your investments can supplement your retirement funds, providing financial stability and freedom. With a guaranteed profit-safe wallet, you minimize risk and ensure peace of mind as you plan for the future. In short, it's a reliable strategy for long-term financial security."}
                </p>
                <button className="appointment-button" onClick={() => window.open('https://calendly.com', '_blank')}>
                    {language ? "حجز موعد" : "Book An Appointment"}
                </button>
            </div>
        </div>
    </div>
    )
};

export default RetirementPlanning;