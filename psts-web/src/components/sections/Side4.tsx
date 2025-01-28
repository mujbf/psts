import React from "react";
import MainButton from "../blocks/MainButton";

const Side4: React.FC = () => {
  return (
    <div className="w-full primary-gradient">
      <div className="max-w-7xl mx-auto px-4 py-20 flex gap-20">
        <div className="flex flex-col gap-12 md:gap-40 w-1/2">
          <h1 className="montserrat-medium text-4xl md:text-6xl leading-tight text-c-white opacity-80">
            Stay up to date on the latest news
          </h1>
        </div>
        <div className="w-1/2 flex flex-col gap-16">
          <p className="roboto-body text-lg text-c-white opacity-80">
            Our expertise has helped businesses navigate complex trade
            regulations, ensuring compliance and efficiency. With a proven track
            record, we empower brands to thrive in competitive markets.
          </p>
          <div className="bg-opacity-0">
            <input
              type="text"
              className="w-full bg-opacity-0 bg-white border-2 border-c-white text-white placeholder:text-white/60 px-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-white"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <MainButton text="Submit" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Side4;
