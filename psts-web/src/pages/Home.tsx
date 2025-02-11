import React from "react";
import Col1 from "../components/sections/Col1";
import Side2 from "../components/sections/Side2";
import Col2 from "../components/sections/Col2";
import Col3 from "../components/sections/Col3";
import KnobCarousel from "../components/sections/KnobCarousel";

const Home = () => {
  return (
    <>
      <div className="w-screen h-screen relative overflow-hidden primary-gradient z-1">
        <KnobCarousel rotationInterval={10000} />
      </div>
      <Col1 />
      <Side2 />
      <Col2 />
      <Col3 />
    </>
  );
};

export default Home;
