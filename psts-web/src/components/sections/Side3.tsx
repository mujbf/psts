import React from "react";

const Side3: React.FC = () => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-20">
        {/* Text Content - Left Side */}
        <div className="flex flex-col gap-12 md:gap-40">
          <div className="flex flex-col gap-5 w-1/2">
            <h1 className="montserrat-semibold text-primary text-2xl md:text-3xl leading-tight">
              Our Vision
            </h1>
            <p className="roboto-body text-black-60">
              Navigating the complexities of trade and customs regulations can
              be daunting. Our expert consultancy services ensure your
              operations are compliant, efficient, and tailored to your specific
              needs. With our support, you can focus on growing your business
              while we handle the intricacies of compliance.
            </p>
          </div>
          <div className="flex w-full justify-end">
            <div className="flex flex-col gap-5 w-1/2">
              <h1 className="montserrat-semibold text-primary text-2xl md:text-3xl leading-tight">
                Our Mission
              </h1>
              <p className="roboto-body text-black-60">
                Navigating the complexities of trade and customs regulations can
                be daunting. Our expert consultancy services ensure your
                operations are compliant, efficient, and tailored to your
                specific needs. With our support, you can focus on growing your
                business while we handle the intricacies of compliance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Side3;
