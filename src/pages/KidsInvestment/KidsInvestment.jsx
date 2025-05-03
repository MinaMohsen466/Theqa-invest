import React from 'react'
import './KidsInvestment.css';
import KidsInvestmentImg from '../../../public/IMG/Kids Investment.webp';
import { FaWhatsapp } from "react-icons/fa";
import './KidsInvestment.css';
import { useNavigate } from 'react-router-dom';

const KidsInvestment = ({language}) => {
    const navigate = useNavigate();
    const handleBookAppointment = () => {
        navigate('/book-appointment');
    }
    const handleWhatsAppClick = () => {
        window.open(`https://wa.me/98049957`, '_blank');
      };

    return(
    <div className={`Estateplan-container ${language ? 'rtl' : 'ltr'}`}>
        <div className='Estateplan-banner'>
            <img src={KidsInvestmentImg} alt={language ? "استثمار مستقبل أطفالك" : "Elderly couple enjoying retirement at beach"} />
        </div>
        <div className='Estateplan-content'>
            <h2>{language ? "خطة استثمار للأطفال" : " Plan Your Kids Investment"}</h2>
            <div className='Estatetplan-text'>
                <p>
                    {language 
                        ? "استثمر في مستقبل أطفالك. الآن هي فرصتك لبدء خطة استثمارية من خلال محفظة آمنة في الأسهم مع نصائح موثوقة لأطفالك. مع نمو أطفالك، يمكن استخدام الأموال التي ادخرتها لتعليمهم ومستقبلهم المهني أو أي أحداث رئيسية أخرى في حياتهم."
                        : "invest for your children future. Now it is your chance to start an investment plan through a safe wallet on stocks with reliable advises  for your children, As your children get older, the funds you've saved can be used for their education, career, or other key life events. With a secure investment plan, you minimize any risk and you secure  a stronger financial future for your kids. It's a wise way to set them up for success."}
                </p>
                <p>
                    {language 
                        ? "مع خطة استثمار آمنة، تقلل أي مخاطر وتضمن مستقبلاً مالياً أقوى لأطفالك. إنها طريقة حكيمة لتأمين مستقبلهم."
                        : ""}
                </p>
            </div>
            <div className='Estateplan-btn-whatsapp'>
                <button className="Estateplan-appointment-button" onClick={handleBookAppointment}>
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