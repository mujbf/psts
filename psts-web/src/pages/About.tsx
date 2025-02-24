import React from "react";
import AboutHero from "../components/sections/AboutHero";
import Side2 from "../components/sections/Side2";
import Side3 from "../components/sections/Side3";
import PartnersSectionDetails from "../components/sections/Col2B";
import Side4 from "../components/sections/Side4";

const About: React.FC = () => {
  return (
    <>
      <AboutHero />
      <Side2 />
      {/* <AboutDetails /> */}
      <Side3 />
      <PartnersSectionDetails />
      <Side4 />
    </>
  );
};

export default About;
