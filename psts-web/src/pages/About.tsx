import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AboutHero from "../components/sections/AboutHero";
import Side2 from "../components/sections/Side2";
import Side3 from "../components/sections/Side3";
import PartnersSectionDetails from "../components/sections/Col2B";
import Side4 from "../components/sections/Side4";

const About: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#partners") {
      const element = document.getElementById("partners");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <>
      <AboutHero />
      <Side2 />
      {/* <AboutDetails /> */}
      <Side3 />
      <div id="partners">
        <PartnersSectionDetails />
      </div>

      <Side4 />
    </>
  );
};

export default About;
