import React from "react";

interface TextButtonProps {
  href: string;
  text: string;
  className?: string;
}

const TextButton: React.FC<TextButtonProps> = ({
  href,
  text,
  className = "",
}) => {
  return (
    <a
      href={href}
      className={`inline-flex items-center text-[#AAAAAA] montserrat-semibold text-xl underline underline-offset-4 transition-all duration-300 hover:text-primary/80 ${className}`}
    >
      {text}
    </a>
  );
};

export default TextButton;
