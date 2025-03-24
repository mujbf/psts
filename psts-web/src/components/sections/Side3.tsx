import React from "react";

const Side3: React.FC = () => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-10 md:py-20">
        {/* Text Content - Left Side */}
        <div className="flex flex-col md:flex-row gap-16 md:gap-16">
          <div className="flex flex-col gap-5 w-full md:w-1/2">
            <h1 className="montserrat-semibold text-primary text-2xl md:text-3xl leading-tight">
              Our Vision
            </h1>
            <p className="roboto-normal text-black-60 ">
              To be the premier trade services firm in the APAC region, setting
              the gold standard for brand protection, trade compliance, and
              sustainable business practices in global commerce.
            </p>
          </div>

          <div className="flex flex-col gap-5 w-full md:w-1/2">
            <h1 className="montserrat-semibold text-primary text-2xl md:text-3xl leading-tight">
              Our Mission
            </h1>
            <p className="roboto-normal text-black-60 text-justify">
              To empower businesses with expert guidance and innovative
              solutions that ensure trade compliance, protect brand integrity,
              and build sustainable supply chains. Through our deep regional
              expertise and global perspective, we help our clients navigate
              complex regulatory landscapes while fostering ethical business
              practices across the APAC region.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Side3;
