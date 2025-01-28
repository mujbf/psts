import React from "react";

const ServicesHero: React.FC = () => {
  return (
    <div className="w-screen h-auto relative -z-1">
      <div className="relative max-w-7xl mx-auto px-4 py-20 h-full ">
        <div className="flex flex-col gap-12 h-full">
          <p className="montserrat-semibold text-xl text-black-60 text-center">
            Our Services
          </p>
          <h1 className="montserrat-medium text-4xl md:text-6xl leading-tight text-primary text-center">
            A complete suite of brand <br /> protection solutions
          </h1>
          <img src="/images/services-bg.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;
