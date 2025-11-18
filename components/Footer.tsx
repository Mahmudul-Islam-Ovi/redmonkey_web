"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-black border-t border-gray-800">
      {/* Contact Section */}
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

      {/* Divider */}
      <div className="border-t border-gray-800"></div>

      {/* Footer Links Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo & Tagline */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo.png"
                alt="RedMonkey Logo"
                width={40}
                height={40}
                className="flex-shrink-0"
              />
              <span className="text-lg font-bold">SR</span>
            </div>
            <p className="text-gray-400 text-sm">
              Original Bangla animation & comics.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-bold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/streaming"
                  className="text-gray-400 hover:text-orange-600 text-sm transition"
                >
                  Streaming
                </Link>
              </li>
              <li>
                <Link
                  href="/comics"
                  className="text-gray-400 hover:text-orange-600 text-sm transition"
                >
                  Comics
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="text-gray-400 hover:text-orange-600 text-sm transition"
                >
                  Shop
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-orange-600 text-sm transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-400 hover:text-orange-600 text-sm transition"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-orange-600 text-sm transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-orange-600 text-sm transition"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-orange-600 text-sm transition"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/refunds"
                  className="text-gray-400 hover:text-orange-600 text-sm transition"
                >
                  Refunds
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
        <p>© {currentYear} Studio Redmonkey. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
