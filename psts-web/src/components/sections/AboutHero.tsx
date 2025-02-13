import React from "react";

const AboutHero: React.FC = () => {
  return (
    <div
      className="w-screen h-[calc(100vh-96px)] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("/images/about-hero.jpg")',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-20 h-full">
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
