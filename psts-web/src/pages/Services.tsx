import React from "react";
import ServicesHero from "../components/sections/ServicesHero";
import Col3 from "../components/sections/Col3";
import Side4 from "../components/sections/Side4";
import KnobCarousel2 from "../components/sections/KnobCarousel2";

interface ServicePageProps {
  title: string;
}

const ServicePage: React.FC<ServicePageProps> = ({}) => {
  return (
    <>
      <ServicesHero />
      <div className="w-screen h-[calc(100vh-96px)] relative overflow-hidden primary-gradient z-1">
        <KnobCarousel2 rotationInterval={10000} />
      </div>
      <Col3 />
      <Side4 />
    </>
  );
};

export default ServicePage;
