import React from "react";

const AboutDetails: React.FC = () => {
  return (
    <div className="w-screen h-auto primary-gradient">
      <div className="absolute inset-0 bg-black/30" />{" "}
      <div className="relative max-w-7xl mx-auto px-4 py-20 h-full flex">
        <div className="flex flex-col gap-20 w-1/2">
          <div className="flex flex-col gap-6 w-1/2">
            <h4 className="montserrat-medium text-c-white text-[128px]">79%</h4>
            <p className="roboto-body text-2xl text-c-white opacity-80">
              Increase in compliance efficiency for our clients.
            </p>
          </div>
          <div className="flex flex-col gap-6 w-1/2">
            <h4 className="montserrat-medium text-c-white text-[128px]">90%</h4>
            <p className="roboto-body text-2xl text-c-white opacity-80">
              Increase in compliance efficiency for our clients.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between w-1/2">
          <div className="flex justify-end w-full">
            <img src="/images/trademark-icon.png" alt="" />
          </div>
          <h1 className="montserrat-medium text-4xl md:text-6xl leading-tight text-c-white">
            Transforming Trade Compliance for Brands
          </h1>
          <p className="roboto-body text-lg text-c-white">
            Our expertise has helped businesses navigate complex trade
            regulations, ensuring compliance and efficiency. With a proven track
            record, we empower brands to thrive in competitive markets.
          </p>
          <p className="montserrat-semibold text-lg text-c-white">Learn More</p>
        </div>
      </div>
    </div>
  );
};

export default AboutDetails;
