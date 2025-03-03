import React, { useState, useEffect } from "react";

interface ContentItem {
  iconPath: string;
  title: string;
  paragraphs: string[];
  bulletPoints: string[];
  color: string;
  lightColor: string;
  gradientId: string;
}

interface LeftKnobCarouselProps {
  rotationInterval?: number;
}

const LeftKnobCarousel: React.FC<LeftKnobCarouselProps> = ({
  rotationInterval = 10000,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const content: ContentItem[] = [
    {
      iconPath: "/icons/carousel/icon1.svg",
      title: "Brand Protection",
      paragraphs: [
        "Our comprehensive Brand Protection Solutions safeguard your intellectual property and reputation in global markets.",
        "We utilize advanced monitoring and enforcement strategies to detect and address counterfeit products, unauthorized distribution, and trademark infringements.",
      ],
      bulletPoints: [
        "24/7 online monitoring across marketplaces",
        "Custom enforcement strategies",
        "Timely takedown of infringing listings",
        "Detailed reporting and analytics",
      ],
      color: "rgba(155, 27, 20, 0.1)",
      lightColor: "rgba(255, 255, 255, 0.1)",
      gradientId: "gradientInnovative",
    },
    {
      iconPath: "/icons/carousel/icon2.svg",
      title: "Trade Services",
      paragraphs: [
        "Our Trade Facilitation services streamline your import and export processes, reducing delays and ensuring compliance with international regulations.",
        "With our support, you can optimize logistics, enhance supply chain efficiency, and expand your global reach while maintaining a competitive edge.",
      ],
      bulletPoints: [
        "Customs documentation preparation",
        "Duty optimization strategies",
        "Import/export compliance",
        "Supply chain risk assessment",
      ],
      color: "rgba(187, 19, 11, 0.1)",
      lightColor: "rgba(255, 255, 255, 0.1)",
      gradientId: "gradientInnovative",
    },
    {
      iconPath: "/icons/carousel/icon3.svg",
      title: "Compliance Audits",
      paragraphs: [
        "Our Compliance Audit services provide a comprehensive evaluation of your trade operations to identify risks and opportunities for improvement.",
        "Our expert team conducts thorough assessments to ensure your business meets all regulatory requirements while optimizing processes.",
      ],
      bulletPoints: [
        "Risk-based compliance assessments",
        "Gap analysis and remediation planning",
        "Trade process optimization",
        "Staff training and development",
      ],
      color: "rgba(187, 19, 11, 0.1)",
      lightColor: "rgba(255, 255, 255, 0.1)",
      gradientId: "gradientInnovative",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % content.length);
        setIsAnimating(false);
      }, 300);
    }, rotationInterval);

    return () => clearInterval(timer);
  }, [rotationInterval, content.length]);

  const calculateCarouselSection = (index: number): string => {
    const sectionAngle = 60; // Keeping the original 60 degree sections
    const isMobile = window.innerWidth < 768;
    // Adjusted base angles for half-circle positioning
    const baseAngle = isMobile ? -30 : -90; // Start from bottom for mobile, left for desktop
    const startAngle = baseAngle + index * sectionAngle;
    const endAngle = startAngle + sectionAngle;

    const startRadians = (startAngle * Math.PI) / 180;
    const endRadians = (endAngle * Math.PI) / 180;

    const radius = 200;
    const innerRadius = 100;

    const startX = radius * Math.cos(startRadians);
    const startY = radius * Math.sin(startRadians);
    const endX = radius * Math.cos(endRadians);
    const endY = radius * Math.sin(endRadians);

    const innerStartX = innerRadius * Math.cos(endRadians);
    const innerStartY = innerRadius * Math.sin(endRadians);
    const innerEndX = innerRadius * Math.cos(startRadians);
    const innerEndY = innerRadius * Math.sin(startRadians);

    return `M ${startX} ${startY} 
            A ${radius} ${radius} 0 0 1 ${endX} ${endY}
            L ${innerStartX} ${innerStartY} 
            A ${innerRadius} ${innerRadius} 0 0 0 ${innerEndX} ${innerEndY}
            Z`;
  };

  const getIconPosition = (
    index: number
  ): { x: number; y: number; labelX: number; labelY: number } => {
    const sectionAngle = 60;
    const isMobile = window.innerWidth < 768;
    // Adjusted base angles for half-circle positioning
    const baseAngle = isMobile ? -30 : -90; // Start from bottom for mobile, left for desktop
    const angle =
      ((baseAngle + index * sectionAngle + sectionAngle / 2) * Math.PI) / 180;
    const iconRadius = 150;
    const labelRadius = 155;

    return {
      x: iconRadius * Math.cos(angle),
      y: iconRadius * Math.sin(angle),
      labelX: labelRadius * Math.cos(angle),
      labelY: labelRadius * Math.sin(angle),
    };
  };

  // Calculate the rotation angle for the inner wheel arrow
  const calculateArrowRotation = () => {
    const sectionAngle = 60;
    const isMobile = window.innerWidth < 768;
    // Adjusted base angles for half-circle positioning
    const baseAngle = isMobile ? -30 : -90; // Start from bottom for mobile, left for desktop
    return baseAngle + activeIndex * sectionAngle + sectionAngle / 2;
  };

  useEffect(() => {
    const handleResize = () => {
      setActiveIndex((prev) => prev);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = window.innerWidth < 768;

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="h-full w-full relative flex items-start md:items-center">
        {/* Fixed positioning for proper centering */}
        <div className="absolute md:left-0 md:top-1/2 md:-translate-y-1/2 md:translate-x-[-50%] bottom-[-150px] left-1/2 -translate-x-1/2 md:bottom-auto">
          <div className="relative w-[400px] h-[400px] md:w-[600px] md:h-[600px]">
            <svg
              viewBox={isMobile ? "-225 -225 450 450" : "-225 -225 450 450"}
              className="w-full h-full transform transition-transform duration-500"
            >
              <defs>
                {/* Gradients for sections */}
                {content.map((item, index) => (
                  <radialGradient
                    key={item.gradientId}
                    id={item.gradientId}
                    cx="0%"
                    cy="0%"
                    r="100%"
                    fx="0%"
                    fy="0%"
                    gradientTransform={`rotate(${
                      // Calculate angle based on item position
                      ((isMobile ? 0 : 0) + index * 60 + 30) % 360
                    })`}
                  >
                    <stop offset="0%" stopColor="rgba(187, 19, 11, 0)" />
                    <stop offset="100%" stopColor="rgba(187, 19, 11, 0.4)" />
                  </radialGradient>
                ))}
                <radialGradient id="circleGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(207, 61, 51, 1)" />
                  <stop offset="100%" stopColor="rgba(196, 57, 47, 1)" />
                </radialGradient>
                {/* Add a clipPath for restricting the view to half circle */}
                <clipPath id="mobileClipPath">
                  <path d="M 0,-225 A 225,225 0 0,1 0,225 L 0,0 Z" />
                </clipPath>
                <clipPath id="desktopClipPath">
                  <path d="M 0,-225 A 225,225 0 0,1 0,225 L 0,0 Z" />
                </clipPath>
              </defs>
              {/* Add the filter definition */}
              <filter
                id="dropShadow"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                <feOffset dx="2" dy="2" result="offsetblur" />
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.3" />{" "}
                  {/* Controls shadow opacity */}
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode /> {/* This contains the shadow */}
                  <feMergeNode in="SourceGraphic" />{" "}
                  {/* This contains the circle */}
                </feMerge>
              </filter>
              <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="10" />
                <feOffset dx="5" dy="5" result="offsetblur" />
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.3" />
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter
                id="whiteGlow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feFlood result="flood" floodColor="white" floodOpacity="0.8" />
                <feComposite
                  in="flood"
                  result="mask"
                  in2="SourceGraphic"
                  operator="in"
                />
                <feGaussianBlur in="mask" result="blurred" stdDeviation="2" />
                <feMerge>
                  <feMergeNode in="blurred" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Main group with clipping applied */}
              <g
                clipPath={
                  isMobile ? "url(#mobileClipPath)" : "url(#desktopClipPath)"
                }
              >
                {/* Background circle */}
                <circle
                  cx="0"
                  cy="0"
                  r="200"
                  fill="#E8695D"
                  opacity="1"
                  filter="url(#shadow)"
                />

                {/* Inner wheel */}
                <g
                  className="transition-transform duration-300"
                  style={{
                    transform: `rotate(${calculateArrowRotation()}deg)`,
                  }}
                >
                  <circle
                    cx="0"
                    cy="0"
                    r="100"
                    fill="url(#circleGradient)"
                    filter="url(#dropShadow)"
                  />
                  <circle
                    cx="75"
                    cy="0"
                    r="8"
                    fill="rgba(184, 47, 36, 1)"
                    className="transition-colors duration-300"
                  />
                  {/* Central dot */}
                  <circle cx="0" cy="0" r="1" fill="rgba(187, 19, 11, 0.8)" />
                </g>

                {/* Carousel sections */}
                {content.map((item, index) => {
                  const isActive = activeIndex === index;
                  const position = getIconPosition(index);

                  return (
                    <g
                      key={index}
                      className="cursor-pointer"
                      onClick={() => {
                        setIsAnimating(true);
                        setTimeout(() => {
                          setActiveIndex(index);
                          setIsAnimating(false);
                        }, 300);
                      }}
                    >
                      <path
                        d={calculateCarouselSection(index)}
                        fill={
                          isActive
                            ? `url(#${item.gradientId})`
                            : "rgba(255, 255, 255, 0.05)"
                        }
                        stroke={item.color}
                        strokeWidth="0"
                        className="transition-colors duration-300"
                      />
                      <foreignObject
                        x={position.x - 15}
                        y={position.y - 28}
                        width="30"
                        height="30"
                        className="pointer-events-none"
                      >
                        <div className="w-full h-full flex items-center justify-center">
                          <img
                            src={item.iconPath}
                            alt={item.title}
                            className={`w-6 h-6 transition-all duration-300 ${
                              isActive ? "" : "opacity-50"
                            }`}
                            style={
                              isActive ? { filter: "url(#whiteGlow)" } : {}
                            }
                          />
                        </div>
                      </foreignObject>
                      <foreignObject
                        x={position.labelX - 54}
                        y={position.labelY - 0}
                        width="120"
                        height="24"
                        className="pointer-events-none"
                      >
                        <div className="w-full h-full flex items-center justify-center">
                          <span
                            className={`roboto-normal text-[9px] ${
                              isActive ? "text-c-white" : "text-white-60"
                            }`}
                          >
                            {item.title}
                          </span>
                        </div>
                      </foreignObject>
                    </g>
                  );
                })}
              </g>
            </svg>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:pl-64 lg:pl-80 w-full md:pb-0 pb-72">
          <div className="p-8 md:p-12 w-full md:w-[80%] flex flex-col gap-6">
            <div
              className={`transition-all duration-500 transform ${
                isAnimating
                  ? "opacity-0 -translate-y-4"
                  : "opacity-100 translate-y-0"
              }`}
            >
              <div className="flex flex-col gap-6">
                <h2 className="montserrat-semibold text-2xl md:text-3xl text-c-white">
                  {content[activeIndex].title}
                </h2>

                {content[activeIndex].paragraphs.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="roboto-normal text-sm md:text-base leading-relaxed text-white-60"
                  >
                    {paragraph}
                  </p>
                ))}

                <div className="mt-2">
                  <ul className="space-y-2">
                    {content[activeIndex].bulletPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-c-white mr-2">•</span>
                        <span className="roboto-normal text-sm md:text-base text-white-60">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftKnobCarousel;
