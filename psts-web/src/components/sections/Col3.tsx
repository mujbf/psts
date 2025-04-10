import React from "react";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import imageSample from "../../assets/images/testimonal-user-sample.png";

interface Testimonial {
  name: string;
  designation: string;
  quote: string;
  rating: number;
  imageUrl: string;
}

const Col3: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const testimonials: Testimonial[] = [
    {
      name: "Jack Chang",
      designation:
        "Former Assistant General Counsel of Johnson & Johnson, Senior IP Counsel of General Electric Company and founder and Chairman of the Quality Brands Protection Committee in China",
      quote:
        "I have known Mr. Leigh Schmid, a former senior Customs official and senior executive of a multination company, for many years. Mr. Schmid's knowledge and experiences in brand protection in compliant way, as well as in matters related to trade, Customs and compliance are unparalleled.",
      rating: 5,
      imageUrl: imageSample,
    },
    {
      name: "Michael Liska",
      designation: "Vice President, Supply Chain, EXPRESS (US Retailer)",
      quote:
        "I have known Leigh for almost 20 years at this point. I've had the pleasure to be Leigh's customer internally while working for L Brands as well as now being an external customer working with him as he has started his consulting practice. Leigh is an indispensable thought partner that provides thoroughly vetted guidance at all levels of your organization ranging from organization structure/planning level guidance down to the tactical day-to-day operating process(es) as well. His relationships and connections within the customs industry are unmatched making him an invaluable advocate for your business should you need it.",
      rating: 5,
      imageUrl: imageSample,
    },
    // {
    //   name: "Jack Chang",
    //   designation:
    //     "Former Assistant General Counsel of Johnson & Johnson, Senior IP Counsel of General Electric Company and founder and Chairman of the Quality Brands Protection Committee in China",
    //   quote:
    //     "I have known Mr. Leigh Schmid, a former senior Customs official and senior executive of a multination company, for many years. Mr. Schmid's knowledge and experiences in brand protection in compliant way, as well as in matters related to trade, Customs and compliance are unparalleled.",
    //   rating: 5,
    //   imageUrl: imageSample,
    // },
  ];

  // Auto-scroll carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex(index);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-10 md:py-20">
        <h1 className="montserrat-medium text-4xl md:text-6xl leading-tight text-gray-800 mb-6 md:mb-16">
          What Our Clients
          <span className="text-primary"> Say About Us</span>
        </h1>

        <div className="relative">
          {/* Desktop navigation arrows - only visible on desktop */}
          <div className="hidden md:flex absolute -left-14 -right-14 inset-y-0 items-center justify-between pointer-events-none z-10">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white shadow-md text-gray-500 hover:text-primary hover:bg-gray-100 hover:shadow-lg transition-all duration-300 ease-in-out pointer-events-auto"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white shadow-md text-gray-500 hover:text-primary hover:bg-gray-100 hover:shadow-lg transition-all duration-300 ease-in-out pointer-events-auto"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Carousel container - narrower on desktop for arrow spacing */}
          <div className="overflow-hidden relative md:mx-12">
            <div
              className="flex transition-all duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <div
                    className="px-6 md:px-12 py-10 rounded-2xl bg-white flex flex-col items-start gap-8"
                    style={{
                      border: "2px solid #FFEAE4",
                      boxShadow: "0px 0px 20px -4px #FFC6B5",
                    }}
                  >
                    <div className="flex flex-col gap-4">
                      <h3 className="montserrat-semibold text-3xl text-primary text-center md:text-left">
                        {testimonial.name}
                      </h3>
                      <p className="montserrat-semibold text-md text-black-60 text-center md:text-left">
                        {testimonial.designation}
                      </p>
                    </div>

                    <blockquote className="roboto-normal text-black-60 mb-4 text-center md:text-left py-4 border-y border-[#CECECC]">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile navigation and indicators - combined into one row on mobile */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            {/* Mobile-only arrow navigation */}
            <button
              onClick={prevSlide}
              className="md:hidden p-3 rounded-full bg-white shadow-md text-gray-500 hover:text-primary hover:bg-gray-100 hover:shadow-lg transition-all duration-300 ease-in-out"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Indicator dots */}
            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary scale-110"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Mobile-only arrow navigation */}
            <button
              onClick={nextSlide}
              className="md:hidden p-3 rounded-full bg-white shadow-md text-gray-500 hover:text-primary hover:bg-gray-100 hover:shadow-lg transition-all duration-300 ease-in-out"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Col3;
