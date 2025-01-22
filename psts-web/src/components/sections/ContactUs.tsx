import React from "react";
import PrimaryButton from "../blocks/PrimaryButton";

const ContactUs: React.FC = () => {
  return (
    <div className="w-full primary-gradient relative">
      {/* Main container with max width */}
      <div className="max-w-7xl mx-auto px-4 py-20 md:py-60 relative z-10">
        {/* Text Content - Left Side */}
        <div className="flex flex-col gap-4 md:gap-12 max-w-[60%] md:max-w-[50%]">
          <p className="montserrat-medium text-c-white text-4xl md:text-6xl leading-tight text-black-60">
            Contact Us
          </p>
          <p className="roboto-body text-white-60 leading-tight text-black-60">
            Our expertise has helped businesses navigate complex trade
            regulations, ensuring compliance and efficiency. With a proven track
            record, we empower brands to thrive in competitive markets.
          </p>

          <div className="flex w-full justify-start">
            <PrimaryButton
              text="Learn More"
              onClick={() => console.log("clicked")}
            />
          </div>
        </div>
      </div>

      {/* Image positioned absolutely to stick to the right */}
      <div className="absolute top-0 right-0 h-full w-1/2 md:w-[45%] z-0">
        <img
          src="/images/contact-us.png"
          alt="Contact Us"
          className="w-full h-full object-cover rounded-l-[120px]"
        />
      </div>
    </div>
  );
};

export default ContactUs;
