import React from "react";
import { useState, useEffect } from "react";
import { Star, StarHalf } from "lucide-react";
import imageSample from "../../assets/images/testimonal-user-sample.png";

interface Testimonial {
  name: string;
  designation: string;
  quote: string;
  rating: number;
  imageUrl: string;
}

const Col3: React.FC = () => {
  const [position, setPosition] = useState(0);

  const testimonials: Testimonial[] = [
    {
      name: "Sarah Chen",
      designation: "Global Trade Director",
      quote:
        "Their compliance solutions have transformed how we manage international trade operations. The level is unmatched.",
      rating: 5,
      imageUrl: imageSample,
    },
    {
      name: "Michael Rodriguez",
      designation: "Risk Management Officer",
      quote:
        "The regulatory intelligence provided helps us stay ahead of compliance requirements. It's been crucial for our global expansion.",
      rating: 4.5,
      imageUrl: imageSample,
    },
    {
      name: "Emma Thompson",
      designation: "Supply Chain Manager",
      quote:
        "Outstanding risk assessment frameworks that have helped us navigate complex international markets with confidence.",
      rating: 5,
      imageUrl: imageSample,
    },
    {
      name: "David Kim",
      designation: "Compliance Officer",
      quote:
        "Their solutions have streamlined our compliance processes and significantly reduced our operational risks.",
      rating: 4.5,
      imageUrl: imageSample,
    },
    {
      name: "Michael Rodriguez",
      designation: "Risk Management Officer",
      quote:
        "The regulatory intelligence provided helps us stay ahead of compliance requirements. It's been crucial for our global expansion.",
      rating: 4.5,
      imageUrl: imageSample,
    },
    {
      name: "Emma Thompson",
      designation: "Supply Chain Manager",
      quote:
        "Outstanding risk assessment frameworks that have helped us navigate complex international markets with confidence.",
      rating: 5,
      imageUrl: imageSample,
    },
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`star-${i}`}
          className="w-8 h-8 text-yellow-400 fill-current"
          strokeWidth={1}
          stroke="#FC430F"
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf
          key="half-star"
          className="w-8 h-8 text-yellow-400 fill-current"
          strokeWidth={1}
          stroke="#FC430F"
        />
      );
    }

    return stars;
  };

  return (
    <div className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-20">
        <h1 className="montserrat-medium text-4xl md:text-6xl leading-tight text-gray-800 mb-16">
          What Our Clients
          <span className="text-primary"> Say About Us</span>
        </h1>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(${position}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="min-w-full md:min-w-[33.333%] p-4">
                <div 
                  className="px-6 py-10 rounded-2xl bg-white flex flex-col items-center gap-8"
                  style={{
                    border: '2px solid #FFEAE4',
                    boxShadow: '0px 0px 20px -4px #FFC6B5'
                  }}
                >
                  <img
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="">
                    <h3 className="montserrat-semibold text-3xl text-primary text-center">
                      {testimonial.name}
                    </h3>
                    <p className="montserrat-semibold text-lg text-black-60 text-center">
                      {testimonial.designation}
                    </p>
                  </div>

                  <blockquote className="roboto-body text-black-60 mb-4 text-center py-4 border-y border-[#CECECC]">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="flex">{renderStars(testimonial.rating)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Col3;