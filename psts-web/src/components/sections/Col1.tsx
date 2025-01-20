// import React from "react";
import { Globe2, BookOpen, Shield, ArrowRight } from "lucide-react";

const Col1 = () => {
  const cards = [
    {
      icon: <Globe2 className="w-20 h-20 text-primary" strokeWidth={1} />,
      title: "Global Trade Solutions",
      description:
        "Access comprehensive international trade solutions that optimize your cross-border operations and enhance market reach.",
    },
    {
      icon: <BookOpen className="w-20 h-20 text-primary" strokeWidth={1} />,
      title: "Regulatory Expertise",
      description:
        "Stay compliant with ever-changing trade regulations through our expert guidance and up-to-date regulatory intelligence.",
    },
    {
      icon: <Shield className="w-20 h-20 text-primary" strokeWidth={1} />,
      title: "Risk Management",
      description:
        "Protect your business with robust risk assessment strategies and compliance frameworks tailored to your operations.",
    },
  ];

  return (
    <div className="w-full min-h-screen">
      <div className="max-w-7xl mx-auto px-4 pt-20">
        <h1 className="montserrat-medium text-4xl md:text-6xl leading-tight text-black-60 mb-16">
          Ensuring Ethical Standards Through{" "}
          <span className="text-primary">
            Comprehensive Social Compliance Solutions
          </span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-primary shadow-sm relative overflow-hidden"
            >
              <div className="absolute inset-0 card-gradient -z-10" />
              <div className="relative z-10">
                <div className="mb-4">{card.icon}</div>
                <p className="roboto-body text-black-60 mb-4">
                  {card.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-primary montserrat-medium underline"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Col1;
