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
        "Their compliance solutions have transformed how we manage international trade operations. The level of expertise and support is unmatched.",
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

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) =>
        prev === -(testimonials.length - 1) * 100 ? 0 : prev - 100
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`star-${i}`}
          className="w-4 h-4 text-yellow-400 fill-current"
          strokeWidth={1}
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf
          key="half-star"
          className="w-4 h-4 text-yellow-400 fill-current"
          strokeWidth={1}
        />
      );
    }

    return stars;
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 pt-20">
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
              <div key={index} className="min-w-full md:min-w-[33.333%] px-4">
                <div className="p-6 rounded-2xl border border-primary shadow-sm bg-white">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.imageUrl}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <h3 className="font-medium text-lg text-gray-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-600">{testimonial.designation}</p>
                    </div>
                  </div>

                  <blockquote className="text-gray-700 mb-4 italic">
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
