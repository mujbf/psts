import React from "react";
import MainButton from "../blocks/ModernButton";
import { MapIcon, PhoneCall, Mail } from "lucide-react";

const ContactForm: React.FC = () => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 py-20 flex gap-20">
        <div>
          <h2>Contact Us</h2>
          <div className="flex">
            <MapIcon size={32} />
            <p>15, Flower Road, Colombo.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
