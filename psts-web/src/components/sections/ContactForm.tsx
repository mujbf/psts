import React, { useState } from "react";
import { MapPin, PhoneCall, Mail } from "lucide-react";
import CustomButton from "../blocks/CustomButton";
import emailjs from "@emailjs/browser";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace these with your actual EmailJS credentials
      const serviceId = "service_7oqla1i";
      const templateId = "template_013jjcv";
      const publicKey = "YB6BakE_DZu4DxQrW";

      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message,
      };

      // Send the email using EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      if (response.status === 200) {
        setSubmitStatus({
          success: true,
          message: "Your message has been sent successfully!",
        });
        // Reset form
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Email sending failed:", error);
      setSubmitStatus({
        success: false,
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
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
          <h2 className="montserrat-medium text-4xl md:text-6xl leading-tight text-primary md:mb-20 text-center md:text-left">
            Contact Us
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <MapPin size={32} className="text-[#AAAAAA]" />
            <p className="roboto-normal text-black-60 text-center md:text-left">
              10, Anson Road, #22-02, <br /> International Plaza, Singapore
              079903
            </p>
          </div>
          {/* <div className="flex items-center gap-4">
            <PhoneCall size={32} className="text-[#AAAAAA]" />
            <p className="roboto-body text-black-60">+94 11 222 3355</p>
          </div> */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Mail size={32} className="text-[#AAAAAA]" />
            <p className="roboto-normal text-black-60 text-center md:text-left">
              contact@pereraschmid.com
            </p>
          </div>
        </div>

        <div className="flex-1 bg-white rounded-lg shadow-lg p-8">
          {submitStatus && (
            <div
              className={`p-4 mb-6 rounded-md ${
                submitStatus.success
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-4 border-2 border-[#C0C0C078] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent roboto-normal text-black-60"
                placeholder="Your Name"
              />
            </div>

            <div className="space-y-2">
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 border-2 border-[#C0C0C078] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent roboto-normal text-black-60"
                placeholder="Your Email"
              />
            </div>

            <div className="space-y-2">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full p-4 border-2 border-[#C0C0C078] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent roboto-normal text-black-60"
                placeholder="Message"
              />
            </div>

            <div className="w-full flex justify-center">
              <CustomButton
                text={isSubmitting ? "Sending..." : "Send Message"}
                variant="black"
                onClick={() => handleSubmit()}
                disabled={isSubmitting}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
