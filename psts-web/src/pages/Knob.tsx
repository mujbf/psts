import React from "react";
import KnobCarousel from "../components/sections/KnobCarousel";

const Knob: React.FC = () => {
  return (
    <div className="w-screen h-screen relative overflow-hidden mt-[-96px] primary-gradient z-1">
      <KnobCarousel rotationInterval={10000} />
    </div>
  );
};

export default Knob;
