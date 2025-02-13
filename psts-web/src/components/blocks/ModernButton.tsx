import React from "react";
import { ArrowRight } from "lucide-react";

interface ModernButtonProps {
  text?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  variant?: "white" | "black";
}

const ModernButton: React.FC<ModernButtonProps> = ({
  text = "Button Text",
  onClick,
  className = "",
  disabled = false,
  variant = "black",
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        group
        relative
        flex
        items-center
        justify-center
        min-w-[200px]
        h-12
        px-8
        rounded-md
        font-medium
        transition-all
        duration-300
        ease-in-out
        overflow-hidden
        border
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${
          variant === "white"
            ? "bg-white text-black border-black hover:text-white"
            : "bg-black text-white border-black hover:text-white"
        }
        ${className}
      `}
    >
      {/* Sliding background */}
      <div
        className={`
          absolute 
          inset-0 
          w-full 
          h-full 
          transition-transform 
          duration-300 
          ease-in-out 
          translate-x-[-101%]
          group-hover:translate-x-0
          ${variant === "white" ? "bg-black" : "bg-gray-800"}
        `}
      />

      {/* Content wrapper */}
      <div className="relative flex items-center w-full justify-center">
        {/* Icon container - left position */}
        <div className="absolute left-0 transition-all duration-300 ease-in-out transform translate-y-0 opacity-100 group-hover:translate-x-[150%] group-hover:opacity-0">
          <ArrowRight
            size={20}
            className={variant === "white" ? "text-black" : "text-white"}
          />
        </div>

        {/* Text */}
        <span className="relative z-10 transition-all duration-300 ease-in-out transform translate-x-5 group-hover:translate-x-0">
          {text}
        </span>

        {/* Icon container - right position */}
        <div className="absolute right-0 transition-all duration-300 ease-in-out transform translate-x-[50%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
          <ArrowRight size={20} className="text-white" />
        </div>
      </div>
    </button>
  );
};

export default ModernButton;
