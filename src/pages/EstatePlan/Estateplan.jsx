import React from 'react'
import './Estateplan.css';
import temp2 from '../../../public/IMG/temp2.png';
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


export const Estateplan = ({language}) => {
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
            <img src={temp2} alt={language ? "تخطيط العقارات والاستثمار" : "Estate planning and investment"} />
        </div>
        <div className='Estateplan-content'>
            <h2>{language ? "خطة العقارات" : "Establish Your Estate Plan"}</h2>
            <div className='Estatetplan-text'>
                <p>
                    {language 
                        ? "الاستثمار في الأسهم هو طريقة رائعة لتنمية رأس مالك وشراء العقارات في النهاية. ابدأ باستثمار رأس مال صغير مع محفظة متنوعة وراقب نمو محفظتك في الاستثمار مع زيادة أرباحك."
                        : "Investing in stocks is a great way to grow your capital and eventually buy real estate. Start by a small capital investment with a diversified your portfolio and watch your wallet grows in investment as your profit increase."}
                </p>
                <p>
                    {language 
                        ? "مع مرور الوقت، يمكن أن تساعدك هذه العوائد في الادخار للدفعة الأولى للعقار. مع الصبر والاستثمار الذكي، يمكن أن توفر الأسهم الأموال اللازمة لجعل شراء عقارك حقيقة واقعة."
                        : <><br />Over time, these returns can help you save for a real estate down payment. With patience and smart investing, stocks can provide the funds needed to make your property purchase a reality.</>}
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
