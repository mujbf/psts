import React from "react";
import Navbar from "../components/main/Navbar";
import Side1 from "../components/sections/Side1";
import Col1 from "../components/sections/Col1";
import Side2 from "../components/sections/Side2";
import Col2 from "../components/sections/Col2";
import Col3 from "../components/sections/Col3";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="w-screen h-screen flex items-center justify-center">
        <p className="montserrat-title">Home Knob Section</p>
      </div>
      <Side1 />
      <Col1 />
      <Side2 />
      <Col2 />
      <Col3 />
    </>
  );
};

export default Home;
