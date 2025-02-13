import React from "react";
import { ArrowRight } from "lucide-react";

type ButtonVariant = "white" | "black";

interface AnimatedButtonProps {
  text: string;
  variant?: ButtonVariant;
  className?: string;
}

const AnimatedButton = ({
  text,
  variant = "black",
  className = "",
}: AnimatedButtonProps) => {
  const baseStyles =
    "group relative inline-flex items-center justify-center gap-2 px-6 py-2 text-sm font-medium transition-all duration-300 ease-in-out border rounded-lg hover:gap-4";

  const variantStyles = {
    black: "border-black text-black hover:bg-black hover:text-white",
    white: "border-white text-white hover:bg-white hover:text-black",
  };

  const iconStyles =
    "transition-all duration-300 ease-in-out transform group-hover:-order-1";

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      <span className="transition-all duration-300 ease-in-out">{text}</span>
      <ArrowRight className={iconStyles} size={16} />
    </button>
  );
};

// Example usage showing both variants
const ButtonDemo = () => {
  return (
    <div className="flex flex-col gap-4 items-start p-8">
      <AnimatedButton text="Click me" variant="black" />
      <div className="bg-gray-900 p-4 rounded-lg">
        <AnimatedButton text="Click me" variant="white" />
      </div>
    </div>
  );
};

export default ButtonDemo;
