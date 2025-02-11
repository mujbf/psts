import React, { useState, useEffect } from "react";
import {
  LockKeyholeOpen,
  Binoculars,
  Package,
  type LucideIcon,
} from "lucide-react";

interface ContentItem {
  icon: LucideIcon;
  heading: string;
  description: string;
  color: string;
  lightColor: string;
}

interface KnobCarouselProps {
  rotationInterval?: number;
}

const KnobCarousel: React.FC<KnobCarouselProps> = ({
  rotationInterval = 10000,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  // ... content array and other state management remains the same ...
  const content: ContentItem[] = [
    {
      icon: Package,
      heading: "Innovative Solutions",
      description:
        "Our Compliance Solutions ensure your business adheres to industry regulations while maintaining operational efficiency. With our expertise, we help you navigate complex compliance requirements, mitigate risks, and uphold your company’s credibility, allowing you to focus on sustainable growth.",
      color: "rgba(187, 19, 11, 0.4)",
      lightColor: "rgba(255, 255, 255, 0.1)",
    },
    {
      icon: Binoculars,
      heading: "Solid Foundation",
      description:
        "Our Trade Facilitation services streamline your import and export processes, reducing delays and ensuring compliance with international regulations. With our support, you can optimize logistics, enhance supply chain efficiency, and expand your global reach while maintaining a competitive edge.",
      color: "rgba(187, 19, 11, 0.4)",
      lightColor: "rgba(255, 255, 255, 0.1)",
    },
    {
      icon: LockKeyholeOpen,
      heading: "Peak Performance",
      description:
        "Our Customs Advisory services provide expert guidance to help you navigate regulatory frameworks and optimize duty costs. With our in-depth knowledge, we assist in risk management, trade compliance, and strategic planning, allowing you to operate smoothly and efficiently in global markets.",
      color: "rgba(187, 19, 11, 0.4)",
      lightColor: "rgba(255, 255, 255, 0.1)",
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

  // ... calculateCarouselSection and getIconPosition functions remain the same ...
  const calculateCarouselSection = (index: number): string => {
    // Each section is 1/8th of the circle (45 degrees)
    const sectionAngle = 45;
    // Desktop: Position sections on the left side (-150 to -60 degrees)
    // Mobile: Position sections on the top side (30 to 120 degrees)
    const isMobile = window.innerWidth < 768;
    const baseAngle = isMobile ? -160 : 110;
    const startAngle = baseAngle + index * sectionAngle;
    const endAngle = startAngle + sectionAngle;

    const startRadians = (startAngle * Math.PI) / 180;
    const endRadians = (endAngle * Math.PI) / 180;

    const radius = 200;
    const innerRadius = 100;

    // Outer arc coordinates
    const startX = radius * Math.cos(startRadians);
    const startY = radius * Math.sin(startRadians);
    const endX = radius * Math.cos(endRadians);
    const endY = radius * Math.sin(endRadians);

    // Inner arc coordinates
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

  const getIconPosition = (index: number): { x: number; y: number } => {
    const sectionAngle = 45; // Keep this the same as your section angle
    const isMobile = window.innerWidth < 768;

    // Use the same base angles as your sections
    const baseAngle = isMobile ? -165 : 110;

    // Calculate angle for center of section
    const angle =
      ((baseAngle + index * sectionAngle + sectionAngle / 2) * Math.PI) / 180;
    const radius = 150; // You can adjust this value to move icons closer/further from center

    return {
      x: radius * Math.cos(angle),
      y: radius * Math.sin(angle),
    };
  };

  // Handler for window resize
  useEffect(() => {
    const handleResize = () => {
      // Force a re-render to update section positions
      setActiveIndex((prev) => prev);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="h-full w-full relative flex items-center">
        {/* Content Section - positioned on the left */}
        <div className="absolute p-8 top-1/2 -translate-y-1/2 md:w-[60%] 2xl:left-[10%] flex flex-col gap-8">
          <h1 className="montserrat-medium text-4xl md:text-7xl leading-tight gradient-text">
            Your Trusted Partner in Trade, Customs, and Brand Protection
            Solutions
          </h1>
          <div
            className={`transition-all duration-500 transform ${
              isAnimating
                ? "opacity-0 -translate-y-4"
                : "opacity-100 translate-y-0"
            }`}
          >
            <div className="flex flex-col gap-4">
              <h2 className="montserrat-semibold text-xl text-c-white">
                {content[activeIndex].heading}
              </h2>
              <p className="roboto-body text-sm md:text-lg text-white-60">
                {content[activeIndex].description}
              </p>
            </div>
          </div>
        </div>

        {/* Carousel Section - positioned relative to container */}
        <div className="absolute md:right-[-200px] md:top-1/2 md:-translate-y-1/2 bottom-[-200px] left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0">
          <div className="relative w-[400px] h-[400px] md:w-[720px] md:h-[720px]">
            <svg
              viewBox="-200 -200 400 400"
              className="w-full h-full transform transition-transform duration-500"
            >
              <circle
                cx="0"
                cy="0"
                r="200"
                fill="#FFFFFF"
                stroke="none"
                // strokeWidth="1"
                opacity="0.1"
              />
              {content.map((item, index) => {
                const isActive = activeIndex === index;
                const iconPosition = getIconPosition(index);

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
                      fill={isActive ? item.color : item.lightColor}
                      stroke={item.color}
                      strokeWidth="0"
                      className="transition-colors duration-300"
                    />
                    <foreignObject
                      x={iconPosition.x - 15}
                      y={iconPosition.y - 15}
                      width="30"
                      height="30"
                      className="pointer-events-none"
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        <item.icon
                          size={24}
                          className="transition-all duration-300"
                          color={isActive ? "white" : item.color}
                          strokeWidth={isActive ? 2.5 : 1.5}
                        />
                      </div>
                    </foreignObject>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnobCarousel;
