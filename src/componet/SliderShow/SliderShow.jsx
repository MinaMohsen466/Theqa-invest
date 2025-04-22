import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderShow.css";
import Banner from "../../../public/IMG/Banner.png"

const SliderShow = ({ language }) => {
  // Slider configuration without arrows

  // Bilingual Content
  const slides = [
    {
      image: Banner,
      mobileImage:Banner,
      title: {
      en: "Your Investment Journey Starts Now. Diversify Your Income.",
        ar: "رحلة استثمارك تبدأ الآن. نوّع دخلك. حسّن مستقبلك المالي."
      },
    },
    {
      image: Banner,
      mobileImage:Banner,
      title: {
       en: "Your Investment Journey Starts Now. Diversify Your Income.",
        ar: "رحلة استثمارك تبدأ الآن. نوّع دخلك. حسّن مستقبلك المالي."
      },
    },
    {
      image: Banner,
      mobileImage:Banner,
      title: {
        en: "Your Investment Journey Starts Now. Diversify Your Income.",
        ar: "رحلة استثمارك تبدأ الآن. نوّع دخلك. حسّن مستقبلك المالي."
      },
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
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
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
    <div className="w-full -mb-2">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            {/* Image Section */}
            <div className="h-[40vh] md:h-[calc(100vh-156.78px)] relative">
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
              <div className="hidden md:flex absolute inset-0 bg-black/30 items-center justify-left p-60">
                <div 
                  className={`text-white max-w-2xl mx-4 ${language ? 'font-[Tajawal]' : 'font-[Poppins]'}`}
                  dir={language ? "rtl" : "ltr"}
                >
                  <h2 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                    {language ? slide.title.ar : slide.title.en}
                  </h2>
                </div>
              </div>
              {/* Mobile Text Overlay */}
              <div className="md:hidden absolute inset-0 bg-black/30 flex items-center justify-center px-4">
                <div 
                  className={`text-white text-center ${language ? 'font-[Tajawal]' : 'font-[Poppins]'}`}
                  dir={language ? "rtl" : "ltr"}
                >
                  <h2 className="text-2xl font-bold leading-tight">
                    {language ? slide.title.ar : slide.title.en}
                  </h2>
                </div>
              </div>
            </div>

            {/* Text Content for Mobile (below image) */}
            {/* Removed mobile text content section as requested */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderShow;