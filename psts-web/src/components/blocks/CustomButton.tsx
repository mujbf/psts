import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

type ButtonVariant = "white" | "black";

interface CustomButtonProps {
  text: string;
  variant?: ButtonVariant;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  route?: string; // New prop for routing
}

const CustomButton = ({
  text,
  variant = "black",
  onClick,
  className = "",
  disabled = false,
  route, // Added route prop
}: CustomButtonProps) => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  const buttonClass = `custom-button ${variant} ${className} ${
    disabled ? "disabled" : ""
  }`;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default button behavior

    // If route is provided, navigate to the route
    if (route) {
      navigate(route);
      return;
    }

    // If onClick is provided, call it
    if (onClick) {
      onClick();
    }
  };

  return (
    <button className={buttonClass} onClick={handleClick} disabled={disabled}>
      <span className="button-content">
        <ArrowRight className="button-icon" size={24} />
        <span className="button-text">{text}</span>
      </span>
      <style>
        {`
          .custom-button {
            position: relative;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0.6em 1.1em;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 600;
            border: 2px solid;
            background: transparent;
            cursor: pointer;
            overflow: hidden;
            transition: all 0.3s ease;
            min-width: 8em;
            font-family: "Montserrat", serif;
            white-space: nowrap;
            box-shadow: 0 0 0 rgba(0, 0, 0, 0);
          }

          .custom-button.disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }

          .custom-button.black {
            border-color: #000;
            color: #000;
          }

          .custom-button.white {
            border-color: #fff;
            color: #fff;
          }

          .custom-button:hover:not(.disabled) {
            gap: 0.5em;
          }

          .custom-button.black:hover:not(.disabled) {
            background: #000;
            color: #fff;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
          }

          .custom-button.white:hover:not(.disabled) {
            background: #fff;
            color: #000;
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.7);
          }

          .button-content {
            display: flex;
            align-items: center;
            gap: 1.5em;
            transition: transform 0.3s ease;
          }

          .button-icon {
            transition: transform 0.3s ease;
          }

          .custom-button:hover:not(.disabled) .button-icon {
            transform: translateX(50%);
          }
        `}
      </style>
    </button>
  );
};

export default CustomButton;
