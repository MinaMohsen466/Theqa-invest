import React, { useState } from 'react';
import './AppointmentBooking.css';
import { FaWhatsapp, FaArrowLeft } from 'react-icons/fa';

const AppointmentBooking = ({ language }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobile: '',
        termsAccepted: false
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Process payment logic would go here
        console.log('Form submitted:', formData);
        // Redirect to payment page or show confirmation
    };

    const handleBack = () => {
        window.history.back();
    };

    const handleWhatsAppClick = () => {
        window.open(`https://wa.me/98049957`, '_blank');
    };

    return (
        <div className={`appointment-booking-container ${language ? 'rtl' : 'ltr'}`}>
            <h1 className="appointment-booking-title">
                {language ? 'حجز موعدك' : 'Book Your Appointment'}
            </h1>

            <div className="consultation-summary">
                <h2>{language ? 'ملخص الاستشارة' : 'CONSULTATION SUMMARY'}</h2>
                <p>
                    {language 
                        ? 'تغطي استشارة الأسهم اختيار المنصة المناسبة والاستراتيجيات المناسبة للاستثمار في الأسهم لتقليل المخاطر وزيادة العوائد.'
                        : 'The stock consultation covers selecting the right platform and proper strategies for investing in stocks to minimize risks and maximize returns.'}
                </p>
                <p className="consultation-duration">
                    {language ? 'مدة الاستشارة: 45 إلى 60 دقيقة' : 'Consultation Duration: 45 to 60 mins'}
                </p>
            </div>

            <form onSubmit={handleSubmit} className="appointment-form">
                <h2 className="form-section-title">
                    {language ? 'أدخل معلوماتك' : 'Enter Your Info'}
                </h2>
                
                <div className="form-group full-width">
                    <input 
                        type="text" 
                        name="fullName" 
                        value={formData.fullName} 
                        onChange={handleInputChange} 
                        placeholder={language ? 'الاسم الكامل' : 'Full Name'} 
                        required 
                    />
                </div>
                
                <div className="form-row">
                    <div className="form-group">
                        <input 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleInputChange} 
                            placeholder={language ? 'البريد الإلكتروني' : 'Email id'} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="tel" 
                            name="mobile" 
                            value={formData.mobile} 
                            onChange={handleInputChange} 
                            placeholder={language ? 'رقم الجوال' : 'Mobile No'} 
                            required 
                        />
                    </div>
                </div>
                
                <div className="consultation-fee">
                    <span>{language ? 'رسوم الاستشارة' : 'Consultation Fee'}</span>
                    <span className="fee-amount">60.00KD</span>
                </div>
                
                <div className="terms-container">
                    <label className="terms-label">
                        <input 
                            type="checkbox" 
                            name="termsAccepted" 
                            checked={formData.termsAccepted} 
                            onChange={handleInputChange} 
                            required 
                        />
                        <span>
                            {language 
                                ? 'بالنقر، أوافق على ' 
                                : 'By clicking, I hereby agree to the '}
                            <a href="#" className="terms-link">{language ? 'الشروط والأحكام' : 'Terms & Conditions'}</a>
                            {language ? ' و ' : ' and '}
                            <a href="#" className="privacy-link">{language ? 'سياسة الخصوصية' : 'Privacy Policy'}</a>
                        </span>
                    </label>
                </div>
                
                <div className="form-buttons">
                    <button type="button" className="back-button" onClick={handleBack}>
                        <FaArrowLeft className="back-icon" />
                        {language ? 'رجوع' : 'Back'}
                    </button>
                    <button type="submit" className="payment-button" disabled={!formData.termsAccepted}>
                        {language ? 'المتابعة إلى الدفع' : 'Proceed to Payment'}
                    </button>
                </div>
            </form>
            
            <button onClick={handleWhatsAppClick} className="AppointmentBooking-floating-whatsapp-button" aria-label={language ? "تواصل عبر واتساب" : "Contact on WhatsApp"}>
                <FaWhatsapp />
            </button>
        </div>
    );
};

export default AppointmentBooking;