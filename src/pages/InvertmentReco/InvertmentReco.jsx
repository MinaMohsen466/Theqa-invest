import React from 'react'
import './InvertmentReco.css';
import investmentRecoImg from '../../../public/IMG/temp4.png';
import { FaWhatsapp } from "react-icons/fa";

const InvertmentReco = ({language}) => {
    const handleWhatsAppClick = () => {
        window.open(`https://wa.me/98049957`, '_blank');
      };

    return(
    <div className={`Estateplan-container ${language ? 'rtl' : 'ltr'}`}>
        <div className='Estateplan-banner'>
            <img src={investmentRecoImg} alt={language ? "زوجان مسنان يستمتعان بالتقاعد على الشاطئ" : "Elderly couple enjoying retirement at beach"} />
        </div>
        <div className='Estateplan-content'>
            <h2>{language ? "تخطيط التقاعد" : "  Investment Recommendations"}</h2>
            <div className='Estatetplan-text'>
                <p>
                    {language 
                        ? "استثمر في الأسهم من خلال محفظة آمنة لبناء الثروة للتقاعد: من خلال اختيار منصة موثوقة ذات أرباح مضمونة، يمكنك إنشاء مصدر دخل ثابت لدعم احتياجاتك المالية في وقت لاحق من حياتك."
                        : "Stock investments are an excellent way to grow your capital and increase your wealth over time. By choosing the right stocks and building a diversified portfolio, you can take advantage of the potential for high returns. Stocks offer the opportunity for both short-term gains and long-term growth as investment."}
                </p>
                <p>
                    {language 
                        ? "استثمر في الأسهم من خلال محفظة آمنة لبناء الثروة للتقاعد: من خلال اختيار منصة موثوقة ذات أرباح مضمونة، يمكنك إنشاء مصدر دخل ثابت لدعم احتياجاتك المالية في وقت لاحق من حياتك."
                        : <><br />Reinvesting your profits allows your investments to generate more returns. stocks can be a reliable way to grow your capital and achieve long-term financial goals.</>}
                </p>
            </div>
            <div className='Estateplan-btn-whatsapp'>
                <button className="Estateplan-appointment-button" onClick={() => window.location.href = '/book-appointment'}>
                    {language ? "حجز موعد" : "Book An Appointment"}
                </button>
                <button onClick={handleWhatsAppClick} className="Estateplan-floating-whatsapp-button" aria-label={language ? "تواصل عبر واتساب" : "Contact on WhatsApp"}>
                <FaWhatsapp />
                </button>
            </div>
        </div>
    </div>
    )
}

export default InvertmentReco