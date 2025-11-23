"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-black border-t border-gray-800">
      {/* Contact Section */}

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
                width={120}
                height={120}
                className="flex-shrink-0"
              />
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
