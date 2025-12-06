"use client";

import React, { useState } from "react";

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully. We'll get back to you soon!",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
        {/* Left Side - Contact Info */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Start a Project
          </h2>
          <p className="text-gray-400 text-sm md:text-base mb-6">
            Tell us about your brief. We usually reply within 24 hours.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
              <span className="text-orange-600">✉</span>
              <a
                href="mailto:info.studioredmonkey@gmail.com"
                className="hover:text-orange-600 transition"
              >
                info.studioredmonkey@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
              <span className="text-orange-600">📞</span>
              <a
                href="tel:01712-782838"
                className="hover:text-orange-600 transition"
              >
                01712-782838
              </a>
            </div>
            <div className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
              <span className="text-orange-600">📍</span>
              <span>Studio Redmonkey, Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form onSubmit={handleSubmit} className="bg-gray-900 rounded-lg p-6 md:p-8">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-600 transition"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-600 transition"
              />
            </div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              pattern="[0-9]{11}"
              title="Please enter a valid 11-digit phone number"
              className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-600 transition"
            />
            <input
              type="text"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              placeholder="Project type (e.g., TVC, Series, NGO film)"
              required
              className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-600 transition"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Brief / requirements"
              rows={5}
              required
              className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-600 transition resize-none"
            />

            {/* Status Messages */}
            {submitStatus.type && (
              <div
                className={`p-4 rounded-lg ${submitStatus.type === "success"
                  ? "bg-green-900/30 border border-green-600 text-green-400"
                  : "bg-red-900/30 border border-red-600 text-red-400"
                  }`}
              >
                {submitStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full font-bold py-3 rounded transition transform ${isSubmitting
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-orange-600 hover:bg-orange-700 hover:scale-105"
                } text-white`}
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
            <p className="text-xs text-gray-400 text-center">
              By submitting you agree to our Terms &amp; Privacy.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
