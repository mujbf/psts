import React from "react";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  const quickLinks = [
    { text: "About Us", href: "/about" },
    { text: "Our Services", href: "/services" },
    { text: "Contact Us", href: "/contact" },
  ];

  const contactInfo = [
    // {
    //   icon: <Phone className="w-5 h-5" />,
    //   text: "+1 234 567 890",
    //   href: "tel:+1234567890",
    // },
    {
      icon: <Mail className="w-5 h-5" />,
      text: "contact@pereraschmid.com",
      href: "mailto:contact@pereraschmid.com",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      text: "10, Anson Road, #22-02, International Plaza, Singapore 079903",
      href: "https://maps.google.com",
    },
  ];

  return (
    <footer className="w-full bg-[#090C08] text-white-60">
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Description */}
          <div className="space-y-6">
            <img
              src="/images/logo.png"
              alt="Perera and Schmid"
              className="h-auto w-full"
            />
            <p className="roboto-normal text-c-white">
              Your trusted partner in navigating the complexities of trade,
              customs, and brand protection. With precision and excellence, we
              help businesses thrive globally.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="montserrat-semibold text-xl text-c-white">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="roboto-normal text-c-white hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 transition-transform transform group-hover:translate-x-1" />
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="montserrat-semibold text-xl text-c-white">
              Contact Us
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <a
                    href={info.href}
                    className="roboto-normal text-c-white hover:text-white transition-colors flex items-center gap-3"
                  >
                    {info.icon}
                    {info.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <p className="roboto-normal text-c-white text-center">
            © {new Date().getFullYear()} Perera and Schmid. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
