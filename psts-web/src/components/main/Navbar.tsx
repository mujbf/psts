import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import desktopLogoImg from "../../assets/desktop-logo.svg";
import mobileLogoImg from "../../assets/mobile-logo.svg";
import CustomButton from "../blocks/CustomButton";

interface NavItemProps {
  to: string;
  children: React.ReactNode;
}

const NavItem = ({ to, children }: NavItemProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`roboto-body px-3 py-2 text-black-60 hover:text-primary ${
        isActive ? "text-orange-600" : ""
      }`}
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg" id="main-navbar">
      <div className="max-w-7xl mx-auto px-4 md:px-12 rounded-b-[10px]">
        <div className="flex justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              {/* Desktop Logo */}
              <img
                src={desktopLogoImg}
                alt="Company Logo"
                className="hidden md:block w-[80%] md:w-full h-auto object-contain transform-none"
              />
              {/* Mobile Logo */}
              <img
                src={mobileLogoImg}
                alt="Company Logo"
                className="md:hidden h-auto object-contain transform-none"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/services">Services</NavItem>

            {/* Contact Button */}
            <Link to="/contact">
              <CustomButton text="Contact" variant="black" route="/contact" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-600 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>

            {/* Mobile Contact Button */}
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-orange-600 hover:bg-orange-700 flex items-center"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
