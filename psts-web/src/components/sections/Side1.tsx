import React from "react";
import PrimaryButton from "../blocks/PrimaryButton";
import bgImg from "../../assets/images/trade-global-bg.jpg";

interface Side1Props {}

const Side1: React.FC<Side1Props> = ({}) => {
  return (
    <div className="relative w-full h-screen">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
      <div className="relative z-10 w-full h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 pt-20 flex flex-col items-center md:items-end">
          <div className="w-full md:w-1/2 flex flex-col gap-40">
            <h1 className="montserrat-medium text-4xl md:text-6xl leading-tight text-black-60">
              Streamline Your Trade & Customs Compliance for{" "}
              <span className="text-primary">Global Success</span>
            </h1>
            <div>
              <p className="roboto-body text-base mt-6 text-black-80">
                Navigating the complexities of trade and customs regulations can
                be daunting. Our expert consultancy services ensure your
                operations are compliant, efficient, and tailored to your
                specific needs. With our support, you can focus on growing your
                business while we handle the intricacies of compliance.
              </p>
              <div className="mt-8">
                <PrimaryButton
                  text="Learn More"
                  onClick={() => console.log("clicked")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Side1;
