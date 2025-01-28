import React from "react";
import { ArrowRight } from "lucide-react";

interface MainButtonProps {
  text?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const MainButton: React.FC<MainButtonProps> = ({
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
        relative 
        py-2
        pl-8 
        pr-4 
        border-none 
        rounded-sm
        text-xl
        cursor-pointer
        transition-all
        duration-250
        hover:pl-4
        hover:pr-8
        disabled:opacity-50
        disabled:cursor-not-allowed
        montserrat-semibold
        group
        bg-transparent
        hover:bg-pink-400
        before:absolute
        before:top-0
        before:left-0
        before:w-full
        before:h-full
        before:bg-pink-400
        before:origin-left
        before:scale-x-0
        hover:before:scale-x-100
        before:transition-transform
        before:duration-250
        before:-z-10
        thebutton
        ${className}
      `}
    >
      <ArrowRight
        size={32}
        className="
          absolute 
          top-1/2 
          -translate-y-1/2 
          left-2
          p-1
          rounded-full
          bg-pink-400
          transition-all
          duration-250
          group-hover:left-[calc(100%-2rem)]
          text-c-white
        "
      />
      <span className="ml-4 relative z-10 text-c-white">{text}</span>
    </button>
  );
};

export default MainButton;
