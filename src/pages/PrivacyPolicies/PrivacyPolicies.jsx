import React from 'react'

const PrivacyPolicies = ({language}) => {
    return (
        <div className='termsAndConditions-container'>
            <h1>
                {language ? "سياسة الخصوصية" : "Privacy Policies"}
            </h1>
            <p>
                {language
                ? <>- المعلومات التي نجمعها
                البيانات الشخصية: الاسم، البريد الإلكتروني، معلومات الاتصال، المعلومات المالية (للامتثال لمتطلبات KYC/AML).
                بيانات الاستخدام: عنوان IP، نوع المتصفح، الصفحات المزارة، سجل المعاملات.<br />
                
                - كيفية استخدام بياناتك
                لتقديم وتحسين خدماتنا.
                لمنع الاحتيال والامتثال القانوني.
                للتواصل بشأن التحديثات والعروض الترويجية أو التنبيهات الأمنية (مع إمكانية إلغاء الاشتراك).<br />
                
                - مشاركة البيانات
                قد نشارك البيانات مع:
                السلطات التنظيمية (إذا كان ذلك مطلوباً قانوناً).
                مزودي الخدمات من الطرف الثالث (معالجي الدفع، التحليلات).
                الشركاء التجاريين (فقط بموافقتك).<br />
                
                - التدابير الأمنية
                نقوم بتنفيذ التشفير وجدران الحماية والبروتوكولات الآمنة لحماية بياناتك.<br />
                
                - ملفات تعريف الارتباط والتتبع
                نستخدم ملفات تعريف الارتباط للوظائف والتحليلات والإعلانات. يمكنك إدارة التفضيلات في متصفحك.<br />
                
                - حقوقك
                الوصول إلى بياناتك الشخصية وتصحيحها أو حذفها.
                سحب الموافقة على الاتصالات التسويقية.
                طلب نقل البيانات (حيثما ينطبق).<br />
                
                - التغييرات في هذه السياسة
                قد نقوم بتحديث هذه السياسة؛ سيتم نشر التغييرات على الموقع.</>
                : <>- Information We Collect Personal Data: Name, email, contact details, financial information (for KYC/AML compliance). Usage Data: IP address, browser type, pages visited, transaction history.<br />
                
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