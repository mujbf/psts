import React from "react";
import Col1 from "../components/sections/Col1";
import Side2 from "../components/sections/Side2";
import Col2 from "../components/sections/Col2";
import Col3 from "../components/sections/Col3";
import KnobCarousel from "../components/sections/KnobCarousel";
import ContactUs from "../components/sections/ContactUs";

const Home: React.FC = () => {
  return (
    <>
      <div className="w-screen h-[calc(100vh-96px)] relative overflow-hidden primary-gradient z-1">
        <KnobCarousel rotationInterval={10000} />
      </div>
      <Col1 />
      <Side2 />
      <Col2 />
      <Col3 />
      <ContactUs />
    </>
  );
};

export default Home;
