import React from "react";
import CustomButton from "../blocks/CustomButton";

const ContactUs: React.FC = () => {
  const isMobile = window.innerWidth < 768;

  const renderMobileView = () => (
    <div className="w-full primary-gradient flex flex-col-reverse">
      {/* Image */}
      <div className="w-full h-[400px]">
        <img
          src="/images/contact-us.png"
          alt="Contact Us"
          className="w-full h-full object-cover rounded-t-[80px]"
        />
      </div>
      {/* Text Content */}
      <div className="p-8 flex flex-col gap-4 text-center">
        <p className="montserrat-medium text-c-white text-4xl text-black-60">
          Contact Us
        </p>
        <p className="roboto-body text-white-60 text-black-60">
          Our expertise has helped businesses navigate complex trade
          regulations, ensuring compliance and efficiency. With a proven track
          record, we empower brands to thrive in competitive markets.
        </p>
        <div>
          <CustomButton text="Get In Touch" variant="white" />
        </div>
      </div>
    </div>
  );

  const renderDesktopView = () => (
    <div className="w-full primary-gradient relative">
      {/* Main container with max width */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-20 md:py-60 relative z-10">
        {/* Text Content - Left Side */}
        <div className="flex flex-col gap-4 md:gap-16 max-w-[60%] md:max-w-[50%]">
          <p className="montserrat-medium text-c-white text-4xl md:text-6xl text-black-60">
            Contact Us
          </p>
          <p className="roboto-body text-white-60 leading-tight text-black-60">
            Our expertise has helped businesses navigate complex trade
            regulations, ensuring compliance and efficiency. With a proven track
            record, we empower brands to thrive in competitive markets.
          </p>
          <div>
            <CustomButton text="Get In Touch" variant="white" />
          </div>
        </div>
      </div>
      {/* Image positioned absolutely to stick to the right */}
      <div className="relative md:absolute sm:bottom-0 md:top-0 md:right-0 h-fit md:h-full w-full md:w-[45%] z-0">
        <img
          src="/images/contact-us.png"
          alt="Contact Us"
          className="w-full h-[400px] md:h-full object-cover rounded-l-[160px]"
        />
      </div>
    </div>
  );

  return isMobile ? renderMobileView() : renderDesktopView();
};

export default ContactUs;
