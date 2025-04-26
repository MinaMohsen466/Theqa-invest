import React from 'react'
import './InvertmentReco.css';
import investmentRecoImg from '../../../public/IMG/temp4.png';
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const InvertmentReco = ({language}) => {
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
            <img src={investmentRecoImg} alt={language ? "توصيات استثمارية متخصصة" : "Investment recommendations and analysis"} />
        </div>
        <div className='Estateplan-content'>
            <h2>{language ? "توصيات استثمارية" : "Investment Recommendations"}</h2>
            <div className='Estatetplan-text'>
                <p>
                    {language 
                        ? "الاستثمار في الأسهم هو طريقة ممتازة لتنمية رأس مالك وزيادة ثروتك مع مرور الوقت. من خلال اختيار الأسهم المناسبة وبناء محفظة متنوعة، يمكنك الاستفادة من إمكانات العوائد المرتفعة. توفر الأسهم فرصة لتحقيق مكاسب على المدى القصير والنمو على المدى الطويل كاستثمار."
                        : "Stock investments are an excellent way to grow your capital and increase your wealth over time. By choosing the right stocks and building a diversified portfolio, you can take advantage of the potential for high returns. Stocks offer the opportunity for both short-term gains and long-term growth as investment."}
                </p>
                <p>
                    {language 
                        ? "إعادة استثمار أرباحك يسمح لاستثماراتك بتحقيق المزيد من العوائد. يمكن أن تكون الأسهم طريقة موثوقة لتنمية رأس مالك وتحقيق أهدافك المالية طويلة المدى."
                        : <><br />Reinvesting your profits allows your investments to generate more returns. stocks can be a reliable way to grow your capital and achieve long-term financial goals.</>}
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

export default InvertmentReco