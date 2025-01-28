import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, MessageCircle, ArrowRight } from "lucide-react";
import logoImg from "../../assets/logo.svg";

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
      className={`text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors roboto-body ${
        isActive ? "text-orange-600" : ""
      }`}
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: "Consulting", to: "/services/consulting" },
    { name: "Development", to: "/services/development" },
    { name: "Design", to: "/services/design" },
  ];

  return (
    <nav className="bg-white shadow-lg z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img src={logoImg} alt="Company Logo" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/about">About</NavItem>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium inline-flex items-center roboto-body text-base"
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {isServicesOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.to}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 roboto-body"
                        role="menuitem"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Contact Button */}
            <Link
              to="/contact"
              className="inline-flex items-center text-sm font-medium rounded-md text-black hover:bg-orange-700 montserrat-button"
            >
              <ArrowRight
                size={16}
                strokeWidth={1}
                absoluteStrokeWidth
                className="h-8 w-14 mr-2 border-2 rounded-full hover:bg-night hover:text-white"
              />
              Contact
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

            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50 flex items-center justify-between"
              >
                Services
                <ChevronDown className="h-4 w-4" />
              </button>
              {isServicesOpen && (
                <div className="pl-4">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.to}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50"
                      onClick={() => {
                        setIsOpen(false);
                        setIsServicesOpen(false);
                      }}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Contact Button */}
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-orange-600 hover:bg-orange-700 flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
