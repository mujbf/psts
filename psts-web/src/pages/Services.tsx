import React from "react";
import ServicesHero from "../components/sections/ServicesHero";
import Col3 from "../components/sections/Col3";
import Side4 from "../components/sections/Side4";

interface ServicePageProps {
  title: string;
}

const ServicePage: React.FC<ServicePageProps> = ({}) => {
  return (
    <>
      <ServicesHero />
      <Col3 />
      <Side4 />
    </>
  );
};

export default ServicePage;
