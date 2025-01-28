import React from "react";

const AboutHero: React.FC = () => {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center bg-no-repeat relative -z-1"
      style={{
        backgroundImage: 'url("/images/about-hero.jpg")',
      }}
    >
      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30" />{" "}
      {/* Adjust opacity as needed */}
      <div className="relative max-w-7xl mx-auto px-4 py-20 h-full ">
        {/* Text Content - Left Side */}
        <div className="flex flex-col gap-12 justify-end h-full">
          <p className="montserrat-semibold text-xl text-c-white">About Us</p>
          <h1 className="montserrat-medium text-4xl md:text-6xl leading-tight text-c-white">
            Who we are & <br />
            what we do.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
