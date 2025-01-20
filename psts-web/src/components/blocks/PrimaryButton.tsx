import React from "react";
import { ArrowRight } from "lucide-react";

interface PrimaryButtonProps {
  text?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text = "Button Text",
  onClick,
  className = "",
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        group
        inline-flex
        items-center
        bg-transparent
        text-white
        hover:text-black
        transition-all
        duration-300
        ${className}
      `}
    >
      <div
        className="
        border
        border-white
        rounded-full
        px-6
        py-2
        mr-2
        group-hover:bg-white
        transition-all
        duration-300
      "
      >
        <ArrowRight
          className="
            w-5
            h-5
            stroke-[2]
            transition-all
            duration-300
            group-hover:fill-black
          "
        />
      </div>
      <span className="py-2 montserrat-semibold text-xl">{text}</span>
    </button>
  );
};

export default PrimaryButton;
