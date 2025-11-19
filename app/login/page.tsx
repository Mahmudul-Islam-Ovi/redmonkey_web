"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    agreeTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your API call here
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo & Branding */}
        <div className="text-center mb-8">
          <Image
            src="/images/logo.png"
            alt="RedMonkey Logo"
            width={120}
            height={120}
            className="mx-auto mb-2 rounded-full"
          />
          <p className="text-gray-400">Where Bangla Stories Come Alive</p>
        </div>

        {/* Card Container */}
        <div className="bg-gray-900 rounded-lg border border-gray-800 p-8">
          {/* Toggle Tabs */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 px-4 rounded transition font-semibold ${
                isLogin
                  ? "bg-orange-600 text-white"
                  : "bg-gray-800 text-gray-400 hover:text-white"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 px-4 rounded transition font-semibold ${
                !isLogin
                  ? "bg-orange-600 text-white"
                  : "bg-gray-800 text-gray-400 hover:text-white"
              }`}
            >
              Register
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field (Register Only) */}
            {!isLogin && (
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-600 transition"
                  required={!isLogin}
                />
              </div>
            )}

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-600 transition"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-600 transition"
                required
              />
            </div>

            {/* Confirm Password Field (Register Only) */}
            {!isLogin && (
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-600 transition"
                  required={!isLogin}
                />
              </div>
            )}

            {/* Remember Me / Forgot Password (Login Only) */}
            {isLogin && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-gray-400 hover:text-white transition cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 bg-gray-800 border border-gray-700 rounded cursor-pointer"
                  />
                  Remember me
                </label>
                <Link
                  href="#"
                  className="text-orange-600 hover:text-orange-500 transition"
                >
                  Forgot Password?
                </Link>
              </div>
            )}

            {/* Terms & Conditions (Register Only) */}
            {!isLogin && (
              <label className="flex items-start gap-2 text-sm text-gray-400 hover:text-white transition cursor-pointer">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="w-4 h-4 bg-gray-800 border border-gray-700 rounded cursor-pointer mt-1"
                  required
                />
                <span>
                  I agree to the{" "}
                  <Link
                    href="#"
                    className="text-orange-600 hover:text-orange-500 transition"
                  >
                    Terms & Conditions
                  </Link>
                </span>
              </label>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded transition mt-6"
            >
              {isLogin ? "Login" : "Create Account"}
            </button>
          </form>

          {/* Social Login */}
          <div className="mt-6">
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-900 text-gray-400">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded transition flex items-center justify-center gap-2">
                <span>👨</span>
                <span className="text-sm">Google</span>
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded transition flex items-center justify-center gap-2">
                <span>f</span>
                <span className="text-sm">Facebook</span>
              </button>
            </div>
          </div>

          {/* Footer Text */}
          <p className="text-center text-gray-400 text-sm mt-6">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-orange-600 hover:text-orange-500 transition font-semibold"
            >
              {isLogin ? "Register here" : "Login here"}
            </button>
          </p>
        </div>

        {/* Footer Links */}
        <div className="mt-8 text-center text-gray-500 text-xs">
          <Link href="/" className="hover:text-gray-300 transition">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
