import React from "react";
import CustomButton from "../blocks/CustomButton";

const Side2: React.FC = () => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-20">
        {/* Text Content - Left Side */}
        <div className="flex flex-col gap-12 md:gap-20">
          <h1 className="montserrat-regular text-[#AAAAAA] text-2xl md:text-3xl leading-tight text-black-60 w-3/4">
            At Perera and Schmid, we are more than just a service provider—we
            are your trusted partner in navigating the complexities of trade,
            customs, and brand protection. With a passion for precision and a
            commitment to excellence, we help businesses thrive in a rapidly
            changing global marketplace.
          </h1>
          <div className="flex w-full justify-end">
            <CustomButton text="Learn More" variant="black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Side2;
