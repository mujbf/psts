import React, { useState } from "react";
import { MapIcon, PhoneCall, Mail } from "lucide-react";
import CustomButton from "../blocks/CustomButton";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }

    // Create mailto link with form data
    const mailtoLink = `mailto:nisaldevindar@gmail.com?subject=Contact Form Submission from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;

    // Open default email client
    window.location.href = mailtoLink;

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-20 flex flex-col md:flex-row gap-20">
        <div className="flex flex-col gap-6">
          <h2 className="montserrat-medium text-4xl md:text-6xl leading-tight text-primary md:mb-20">
            Contact Us
          </h2>
          <div className="flex items-center gap-4">
            <MapIcon size={32} className="text-[#AAAAAA]" />
            <p className="roboto-body text-black-60">
              15, Flower Road, Colombo.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <PhoneCall size={32} className="text-[#AAAAAA]" />
            <p className="roboto-body text-black-60">+94 11 222 3355</p>
          </div>
          <div className="flex items-center gap-4">
            <Mail size={32} className="text-[#AAAAAA]" />
            <p className="roboto-body text-black-60">
              info@pereraandschmid.com
            </p>
          </div>
        </div>

        <div className="flex-1 bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block roboto-body text-black-60">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent roboto-body text-black-60"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block roboto-body text-black-60"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent roboto-body text-black-60"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block roboto-body text-black-60"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent roboto-body text-black-60"
                placeholder="Your message here..."
              />
            </div>

            <div className="w-full flex justify-center">
              <CustomButton
                text="Send Message"
                variant="black"
                onClick={() => handleSubmit()}
                disabled={false}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
