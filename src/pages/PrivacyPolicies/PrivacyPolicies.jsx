import React from 'react'

const PrivacyPolicies = ({languge}) => {
    return (
        <div className='termsAndConditions-container'>
            <h1>
                {languge ? "سياسة الخصوصية" : "PrivacyPolicies"}
            </h1>
            <p>
                {languge
                ? ""
                :<>- Information We Collect Personal Data: Name, email, contact details, financial information (for KYC/AML compliance). Usage Data: IP address, browser type, pages visited, transaction history.<br />
                
                - How We Use Your Data To provide and improve our services. For fraud prevention and legal compliance. To communicate updates, promotions, or security alerts (opt-out available).<br />
                
                - Data SharingWe may share data with:
                 Regulatory authorities (if required by law). Third-party service providers (payment processors, analytics). Business partners (only with your consent).<br />
                
                - Security Measures We implement encryption, firewalls, and secure protocols to protect your data.<br />
                
                - Cookies & Tracking We use cookies for functionality, analytics, and ads. You can manage preferences in your browser.<br />
                
                - Your Rights Access, correct, or delete your personal data. Withdraw consent for marketing communications. Request data portability (where applicable).<br />
                
                - Changes to This Policy We may update this policy; changes will be posted on the Website.<br /></>}
            </p>
        </div>
      )
}

export default PrivacyPolicies