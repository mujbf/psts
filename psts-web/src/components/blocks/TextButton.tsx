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
      style={{
        textShadow: "rgba(0, 0, 0, 0.4) 1px 1px 2px inset",
        WebkitTextStroke: "0.5px rgba(0, 0, 0, 0.3)",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.webkitTextStroke = "1px rgba(228, 93, 15, 1)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.webkitTextStroke = "0.5px rgba(0, 0, 0, 0.3)")
      }
    >
      {text}
    </a>
  );
};

export default TextButton;
