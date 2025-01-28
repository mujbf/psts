import React from "react";
import Col1 from "../components/sections/Col1";
import Side2 from "../components/sections/Side2";
import Col2 from "../components/sections/Col2";
import Col3 from "../components/sections/Col3";

const Home = () => {
  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center">
        <p className="montserrat-title">Home Knob Section</p>
      </div>
      <Col1 />
      <Side2 />
      <Col2 />
      <Col3 />
    </>
  );
};

export default Home;
