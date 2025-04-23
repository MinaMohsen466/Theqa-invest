import React from 'react';
import './LocateUs.css';

const LocateUs = ({ language }) => {
  return (
    <div className={`locate-us-section ${language ? 'rtl' : 'ltr'}`} id='location'>
      <h2 className="section-title">{language ? 'موقعنا' : 'Locate Us'}</h2>
      
      <div className="locate-us-container">
        <div className="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4278.160164982748!2d47.98722507615646!3d29.374564549997302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf84bd6af31fe9%3A0x3c5db208ca26dd64!2z2LTYsdmD2Kkg2YXYqNin2K_YsSDZhNiu2K_Zhdin2Kog2KfZhNmF2LTYp9ix2YrYuSDYp9mE2LXYutmK2LHYqSDZiCDYp9mE2YXYqtmI2LPYt9ip!5e1!3m2!1sen!2skw!4v1745388882177!5m2!1sen!2skw" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Theqa Invest Location" frameBorder="0" aria-hidden="false" tabIndex="0"></iframe>
        </div>
        
        <div className="contact-info">
          <div className="info-group">
            <h3 className="info-label">{language ? 'العنوان:' : 'Address:'}</h3>
            <p className="info-text">
              {language ? 'مزايا 2، الطابق 15، شارع خالد بن الوليد، الكويت' : 'Mazaya 2, 15th Floor, Khalid Ibn Al Waleed St, KBT, Kuwait City'}
            </p>
          </div>
          
          <div className="info-group">
            <h3 className="info-label">{language ? 'ساعات العمل:' : 'Office Hours:'}</h3>
            <p className="info-text">
              {language ? 'السبت - الخميس: 8 صباحًا - 5 مساءً' : 'Saturday - Thursday: 8 AM - 5 PM'}
            </p>
          </div>
          
          <div className="info-group">
            <h3 className="info-label">{language ? 'الهاتف:' : 'Phone:'}</h3>
            <p className="info-text">+965 98765432</p>
          </div>
          
          <div className="info-group">
            <h3 className="info-label">{language ? 'البريد الإلكتروني:' : 'Email:'}</h3>
            <p className="info-text">info@theqainvest.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocateUs;