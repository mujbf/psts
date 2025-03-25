import React, { useState } from "react";
import { Menu, X, ChevronDown, MessageCircle } from "lucide-react";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

const NavItem = ({ href, children }: NavItemProps) => (
  <a
    href={href}
    className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
  >
    {children}
  </a>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: "Consulting", href: "/servicconsultinges/" },
    { name: "Development", href: "/services/development" },
    { name: "Design", href: "/services/design" },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-orange-600">PSTS</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/about">About</NavItem>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium inline-flex items-center"
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {isServicesOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu">
                    {services.map((service) => (
                      <a
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Contact Button */}
            <a
              href="/contact"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Contact
            </a>
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
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50"
            >
              Home
            </a>
            <a
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50"
            >
              About
            </a>

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
                    <a
                      key={service.name}
                      href={service.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50"
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Contact Button */}
            <a
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-orange-600 hover:bg-orange-700 flex items-center"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
