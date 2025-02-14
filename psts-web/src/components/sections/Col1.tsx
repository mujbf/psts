import React from "react";
import TextButton from "../blocks/TextButton";

const Col1: React.FC = () => {
  const cards = [
    {
      image: (
        <img
          src="/images/comprehensive.png"
          alt="Comprehensive"
          className="w-auto h-24 md:h-40 mx-auto"
        />
      ),
      title: "Comprehensive",
      description:
        "Our solutions are end-to-end and designed to make safeguarding your IP hassle-free as it can be, while ensuring continuous monitoring.",
      link: "/comprehensive",
    },
    {
      image: (
        <img
          src="/images/strategic.png"
          alt="Strategic"
          className="w-auto h-24 md:h-40 mx-auto"
        />
      ),
      title: "Strategic",
      description:
        "Our experience and long standing relationships with enforcement agencies and regulatory bodies help us navigate complexity with ease.",
      link: "/strategic",
    },
    {
      image: (
        <img
          src="/images/tailored.png"
          alt="Tailored"
          className="w-auto h-24 md:h-40 mx-auto"
        />
      ),
      title: "Tailored",
      description:
        "Global, regional, or local, however you compete and vary your product strategy, we will customize our services to suit your business model and brand aspirations.",
      link: "/tailored",
    },
  ];

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-20">
        <h1 className="montserrat-medium text-4xl md:text-6xl leading-tight text-black-60 mb-16">
          Your IP. <br />
          <span className="text-primary">Your competitive advantage.</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {cards.map((card, index) => (
            <div
              key={index}
              className="px-6 py-10 md:px-8 md:py-12 rounded-2xl border-2 border-[#DDDDDD] shadow-sm relative flex md:flex-col items-center"
            >
              <div className="absolute inset-0 card-gradient -z-10 rounded-[12px]" />
              <div className="relative z-10 flex flex-col items-center space-y-6">
                <div className="flex justify-center w-full">{card.image}</div>
                <h3 className="montserrat-semibold text-2xl md:text-3xl text-primary text-center">
                  {card.title}
                </h3>
                <p className="roboto-body text-black-60 text-center">
                  {card.description}
                </p>
                <TextButton href={card.link} text="Learn More" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Col1;
