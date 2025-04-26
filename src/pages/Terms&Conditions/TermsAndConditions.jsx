import React from 'react'
import './TermsAndConditions.css'

const TermsAndConditions = ({language}) => {
  return (
    <div className='termsAndConditions-container'>
        <h1>
            {language ? "الشروط والأحكام" : "Terms and Conditions"}
        </h1>
        <p>
            {language
            ? <>1.1 قبول الشروط
            باستخدام موقع ثقة للاستثمار ("الموقع")، فإنك توافق على الالتزام بشروط الخدمة ("الشروط"). إذا كنت لا توافق، يرجى الامتناع عن استخدام الموقع.<br />
            
            1.2 الأهلية
            يجب أن يكون عمرك 18 عامًا على الأقل (أو السن القانوني في منطقتك) لاستخدام هذه المنصة الاستثمارية.<br />
            
            1.3 مخاطر الاستثمار
            يتضمن الاستثمار مخاطر السوق، بما في ذلك احتمالية خسارة رأس المال. الأداء السابق لا يضمن النتائج المستقبلية. لا تقدم ثقة للاستثمار نصائح مالية؛ استشر متخصصًا قبل الاستثمار.<br />
            
            1.4 أمان الحساب
            أنت مسؤول عن الحفاظ على سرية بيانات تسجيل الدخول الخاصة بك. أبلغنا فورًا عن أي نشاط غير مصرح به في حسابك.<br />
            
            1.5 الأنشطة المحظورة
            لا يجوز لك:
            استخدام الموقع لأنشطة غير قانونية أو احتيالية.
            محاولة تعطيل أمن المنصة أو عملياتها.
            تحريف المعلومات أو المشاركة في التلاعب بالسوق.<br />
            
            1.6 الإنهاء
            نحتفظ بالحق في تعليق أو إنهاء الحسابات التي تنتهك هذه الشروط.</>
            : <>1.1 Acceptance of Terms By accessing and using TheQA-Invest (the "Website"), you agree to comply with these Terms of Service ("Terms"). If you do not agree, please refrain from using the Website.<br />1.2 EligibilityYou must be at least 18 years old (or the legal age in your jurisdiction) to use this investment platform.<br />1.3 Investment RisksInvesting involves market risks, including potential loss of capital.Past performance does not guarantee future results.TheQA-Invest does not provide financial advice; consult a professional before investing.<br />1.4 Account SecurityYou are responsible for maintaining the confidentiality of your login credentials.Notify us immediately of any unauthorized account activity.<br />1.5 Prohibited ActivitiesYou may not:Use the Website for illegal or fraudulent activities.Attempt to disrupt the platform's security or operations.Misrepresent information or engage in market manipulation.<br />1.6 TerminationWe reserve the right to suspend or terminate accounts violating these Terms.</>}
        </p>
    </div>
  )
}

export default TermsAndConditions