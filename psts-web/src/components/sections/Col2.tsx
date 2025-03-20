import React from "react";
import image1 from "/images/people/schmid.png";
import image2 from "/images/people/perera.png";
import TextButton from "../blocks/TextButton";

const PartnersSection: React.FC = () => {
  const cards = [
    {
      image: image1,
      name: "Leigh A. Schmid",
      description:
        "Former Canadian Customs officer turned KPMG Partner, later SVP at L Brands & VS&Co. Expert in global trade compliance, customs & brand protection. MBA from McMaster. Served on COAC & WCO advisory boards.",
      link: "/about#partners",
    },
    {
      image: image2,
      name: "Sudath Perera",
      description:
        "Leading Sri Lankan IP lawyer since 1991, founder of Sudath Perera Associates. Known as Sri Lanka’s counterfeit buster, and pioneered brand protection in Sri Lanka. Member of multiple international legal bodies & corporate boards.",
      link: "/about#partners",
    },
  ];

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-20">
        <h1 className="montserrat-medium text-4xl md:text-6xl leading-tight text-black-60 mb-16">
          The <span className="text-primary">Partners</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {cards.map((card, index) => (
            <div key={index}>
              <img
                src={card.image}
                alt={card.name}
                className="w-full object-cover rounded-xl mb-6 shadow-md"
              />
              <h3 className="montserrat-semibold text-3xl text-primary mb-4">
                {card.name}
              </h3>
              <p className="roboto-normal text-black-60 mb-4">
                {card.description}
              </p>
              <TextButton href={card.link} text="Learn More" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
