import React from "react";

const page = () => {
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
                href="mailto:nipunkundu111@gmail.com"
                className="hover:text-orange-600 transition"
              >
                nipunkundu111@gmail.com
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
        <form className="bg-gray-900 rounded-lg p-6 md:p-8">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-600 transition"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-600 transition"
              />
            </div>
            <input
              type="text"
              placeholder="Project type (e.g., TVC, Series, NGO film)"
              className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-600 transition"
            />
            <textarea
              placeholder="Brief / requirements"
              rows={5}
              className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-600 transition resize-none"
            />
            <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded transition">
              Send
            </button>
            <p className="text-xs text-gray-400 text-center">
              By submitting you agree to our Terms & Privacy.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
