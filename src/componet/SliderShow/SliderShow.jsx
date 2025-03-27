import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from "../../../public/IMG/Banner.png"

const SliderShow = ({ language }) => {
  // Arrow Components with responsive sizing
  const NextArrow = (props) => (
    <button {...props} className="absolute right-4 md:right-8 top-1/2 z-20 -translate-y-1/2 p-1 md:p-2 focus:outline-none group">
      <div className="relative h-8 w-8 md:h-12 md:w-12">
        <div className="absolute inset-0 rounded-full border-2 border-[#9C1B31] opacity-70 group-hover:opacity-100 transition-all duration-300"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#9C1B31"
          className="h-4 w-4 md:h-6 md:w-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </button>
  );

  const PrevArrow = (props) => (
    <button {...props} className="absolute left-4 md:left-8 top-1/2 z-20 -translate-y-1/2 p-1 md:p-2 focus:outline-none group">
      <div className="relative h-8 w-8 md:h-12 md:w-12">
        <div className="absolute inset-0 rounded-full border-2 border-[#9C1B31] opacity-70 group-hover:opacity-100 transition-all duration-300"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#9C1B31"
          className="h-4 w-4 md:h-6 md:w-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </div>
    </button>
  );

  // Bilingual Content
  const slides = [
    {
      image: Banner,
      mobileImage:Banner,
      title: {
      en: "Your investment journey starts now. Diversify your income. Cure Your Financial Future",
        ar: "رحلة استثمارك تبدأ الآن. نوّع دخلك. حسّن مستقبلك المالي."
      },
      subtitle: {
        en: "Explore our innovative solutions",
        ar: "اكتشف حلولنا المبتكرة"
      },
      buttonText: {
        en: "Learn More",
        ar: "تعلم المزيد"
      }
    },
    {
      image: Banner,
      mobileImage:Banner,
      title: {
       en: "Your investment journey starts now. Diversify your income. Cure Your Financial Future",
        ar: "رحلة استثمارك تبدأ الآن. نوّع دخلك. حسّن مستقبلك المالي."
      },
      subtitle: {
        en: "Experience excellence in every detail",
        ar: "جودة ممتازة في كل التفاصيل"
      },
      buttonText: {
        en: "Get Started",
        ar: "ابدأ الآن"
      }
    },
    {
      image: Banner,
      mobileImage:Banner,
      title: {
        en: "Your investment journey starts now. Diversify your income. Cure Your Financial Future",
        ar: "رحلة استثمارك تبدأ الآن. نوّع دخلك. حسّن مستقبلك المالي."
      },
      subtitle: {
        en: "Be part of something bigger",
        ar: "كن جزءًا من شيء أكبر"
      },
      buttonText: {
        en: "Sign Up Now",
        ar: "سجل الآن"
      }
    }
  ];

  // Responsive Slider Settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots: true,
          autoplaySpeed: 3000
        }
      }
    ]
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            {/* Image Section */}
            <div className="h-[40vh] md:h-screen">
              <picture>
                <source media="(max-width: 768px)" srcSet={slide.mobileImage} />
                <source media="(min-width: 769px)" srcSet={slide.image} />
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </picture>
              {/* Overlay for Desktop */}
              <div className="hidden md:flex absolute inset-0 bg-black/30 items-center justify-center p-8">
                <div 
                  className={`text-white text-center max-w-2xl mx-4 ${language ? 'font-[Tajawal]' : 'font-[Poppins]'}`}
                  dir={language ? "rtl" : "ltr"}
                >
                  <h2 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                    {language ? slide.title.ar : slide.title.en}
                  </h2>
                  <p className="text-xl lg:text-2xl mb-8 font-light max-w-lg mx-auto">
                    {language ? slide.subtitle.ar : slide.subtitle.en}
                  </p>
                  <button 
                    className="bg-[#9C1B31] hover:bg-[#7a1426] text-white font-semibold py-3 px-8 rounded-lg transition-colors text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                    style={{ fontFamily: language ? 'Tajawal, sans-serif' : 'Poppins, sans-serif' }}
                  >
                    {language ? slide.buttonText.ar : slide.buttonText.en}
                  </button>
                </div>
              </div>
            </div>

            {/* Text Content for Mobile (below image) */}
            <div className="md:hidden bg-white p-6">
              <div 
                className={`text-gray-800 text-center ${language ? 'font-[Tajawal]' : 'font-[Poppins]'}`}
                dir={language ? "rtl" : "ltr"}
              >
                <h2 className="text-2xl font-bold mb-3 leading-tight">
                  {language ? slide.title.ar : slide.title.en}
                </h2>
                <p className="text-base mb-6 text-gray-600 max-w-md mx-auto">
                  {language ? slide.subtitle.ar : slide.subtitle.en}
                </p>
                <button 
                  className="bg-[#9C1B31] hover:bg-[#7a1426] text-white font-semibold py-2 px-6 rounded-lg transition-colors text-base shadow-md hover:shadow-lg transition-all duration-300"
                  style={{ fontFamily: language ? 'Tajawal, sans-serif' : 'Poppins, sans-serif' }}
                >
                  {language ? slide.buttonText.ar : slide.buttonText.en}
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderShow;