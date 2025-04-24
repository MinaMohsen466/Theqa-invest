import React from 'react'
import './KidsInvestment.css';
import temp3 from '../../../public/IMG/temp3.png';
import { FaWhatsapp } from "react-icons/fa";
import './KidsInvestment.css';

const KidsInvestment = ({language}) => {
    const handleWhatsAppClick = () => {
        window.open(`https://wa.me/98049957`, '_blank');
      };

    return(
    <div className={`Estateplan-container ${language ? 'rtl' : 'ltr'}`}>
        <div className='Estateplan-banner'>
            <img src={temp3} alt={language ? "زوجان مسنان يستمتعان بالتقاعد على الشاطئ" : "Elderly couple enjoying retirement at beach"} />
        </div>
        <div className='Estateplan-content'>
            <h2>{language ? "تخطيط التقاعد" : " Plan Your Kids Investment"}</h2>
            <div className='Estatetplan-text'>
                <p>
                    {language 
                        ? "استثمر في الأسهم من خلال محفظة آمنة لبناء الثروة للتقاعد: من خلال اختيار منصة موثوقة ذات أرباح مضمونة، يمكنك إنشاء مصدر دخل ثابت لدعم احتياجاتك المالية في وقت لاحق من حياتك."
                        : "invest for your children future. Now it is your chance to start an investment plan through a safe wallet on stocks with reliable advises  for your children, As your children get older, the funds you’ve saved can be used for their education, career, or other key life events. With a secure investment plan, you minimize any risk and you secure  a stronger financial future for your kids. It’s a wise way to set them up for success."}
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

export default KidsInvestment