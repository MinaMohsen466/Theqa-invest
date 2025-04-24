import React from 'react'
import './TermsAndConditions.css'

const TermsAndConditions = ({languge}) => {
  return (
    <div className='termsAndConditions-container'>
        <h1>
            {languge ? "الشروط والاحكام" : "Terms and Conditions"}
        </h1>
        <p>
            {languge
            ? ""
            :<>1.1 Acceptance of Terms By accessing and using TheQA-Invest (the "Website"), you agree to comply with these Terms of Service ("Terms"). If you do not agree, please refrain from using the Website.<br />1.2 EligibilityYou must be at least 18 years old (or the legal age in your jurisdiction) to use this investment platform.<br />1.3 Investment RisksInvesting involves market risks, including potential loss of capital.Past performance does not guarantee future results.TheQA-Invest does not provide financial advice; consult a professional before investing.<br />1.4 Account SecurityYou are responsible for maintaining the confidentiality of your login credentials.Notify us immediately of any unauthorized account activity.<br />1.5 Prohibited ActivitiesYou may not:Use the Website for illegal or fraudulent activities.Attempt to disrupt the platform’s security or operations.Misrepresent information or engage in market manipulation.<br />1.6 TerminationWe reserve the right to suspend or terminate accounts violating these Terms.</>}
        </p>
    </div>
  )
}

export default TermsAndConditions