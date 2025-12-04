"use client";

import React, { useEffect, useState } from "react";
import teamData from "@/data/team.json";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    linkedin: string;
    twitter: string;
    instagram: string;
  };
}

export default function page() {
  const [isVisible, setIsVisible] = useState(false);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    setIsVisible(true);
    setTeamMembers(teamData);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
      {/* Animated Background Elements */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }
        @keyframes glow {
          0%, 100% { opacity: 0.3; filter: blur(40px); }
          50% { opacity: 0.6; filter: blur(20px); }
        }
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes pulse-border {
          0%, 100% { box-shadow: 0 0 20px rgba(234, 88, 12, 0.3); }
          50% { box-shadow: 0 0 40px rgba(234, 88, 12, 0.6); }
        }
        .float { animation: float 6s ease-in-out infinite; }
        .glow { animation: glow 4s ease-in-out infinite; }
        .animate-slide-down { animation: slideInDown 0.8s ease-out forwards; }
        .animate-slide-up { animation: slideInUp 0.8s ease-out forwards; }
        .animate-slide-left { animation: slideInLeft 0.8s ease-out forwards; }
        .animate-slide-right { animation: slideInRight 0.8s ease-out forwards; }
        .pulse-border { animation: pulse-border 3s ease-in-out infinite; }
      `}</style>

      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-600 rounded-full glow opacity-20 -translate-x-1/2 -translate-y-1/2 float"></div>
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full glow opacity-20 translate-x-1/2 translate-y-1/2 float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-600 rounded-full glow opacity-10 -translate-x-1/2 -translate-y-1/2 float"
        style={{ animationDelay: "4s" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Header Section */}
        <div
          className="text-center mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            animation: isVisible ? "slideInDown 0.8s ease-out" : "none",
          }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">
            About Red Monkey
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Creating amazing digital experiences and content that captivates,
            inspires, and entertains.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              animation: isVisible
                ? "slideInLeft 0.8s ease-out 0.2s forwards"
                : "none",
            }}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm border border-orange-600/30 rounded-xl p-8 pulse-border">
              <h2 className="text-3xl font-bold text-orange-500 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                At Red Monkey, we are passionate about creating innovative
                digital solutions that bring stories to life. Whether it's
                comics, coloring books, or interactive experiences, our goal is
                to deliver quality content that resonates with our audience.
              </p>
              <p className="text-gray-400">
                We believe in the power of creativity, community, and continuous
                innovation to shape the future of digital entertainment.
              </p>
            </div>
          </div>

          <div
            style={{
              opacity: isVisible ? 1 : 0,
              animation: isVisible
                ? "slideInRight 0.8s ease-out 0.3s forwards"
                : "none",
            }}
          >
            <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl p-8 shadow-2xl transform hover:scale-105 transition duration-300">
              <div className="text-5xl font-bold text-white mb-4">100+</div>
              <p className="text-white text-lg font-semibold mb-4">
                Creative Projects
              </p>
              <p className="text-orange-100">
                Delivered with excellence and innovation across multiple
                platforms and mediums.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2
            className="text-4xl font-bold text-center mb-12"
            style={{
              opacity: isVisible ? 1 : 0,
              animation: isVisible
                ? "slideInDown 0.8s ease-out 0.4s forwards"
                : "none",
            }}
          >
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎨",
                title: "Creativity",
                desc: "We push boundaries and explore new creative frontiers.",
              },
              {
                icon: "⚡",
                title: "Innovation",
                desc: "Latest tech and trends to deliver cutting-edge solutions.",
              },
              {
                icon: "❤️",
                title: "Quality",
                desc: "We never compromise on the quality of our work.",
              },
            ].map((value, idx) => (
              <div
                key={idx}
                style={{
                  opacity: isVisible ? 1 : 0,
                  animation: isVisible
                    ? `slideInUp 0.8s ease-out ${0.5 + idx * 0.15}s forwards`
                    : "none",
                }}
              >
                <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-orange-600/50 hover:bg-gray-800/60 transition duration-300 group">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-400">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Team Section */}
        <div className="mb-20">
          <h2
            className="text-4xl font-bold text-center mb-4"
            style={{
              opacity: isVisible ? 1 : 0,
              animation: isVisible
                ? "slideInDown 0.8s ease-out 0.5s forwards"
                : "none",
            }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">
              Our Team
            </span>
          </h2>
          <p
            className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
            style={{
              opacity: isVisible ? 1 : 0,
              animation: isVisible
                ? "slideInDown 0.8s ease-out 0.6s forwards"
                : "none",
            }}
          >
            Meet the talented individuals who make Red Monkey a reality
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div
                key={member.id}
                style={{
                  opacity: isVisible ? 1 : 0,
                  animation: isVisible
                    ? `slideInUp 0.8s ease-out ${0.7 + idx * 0.1}s forwards`
                    : "none",
                }}
              >
                <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-orange-600/50 transition-all duration-300 group">
                  {/* Image Container */}
                  <div className="relative overflow-hidden aspect-square bg-gradient-to-br from-gray-700 to-gray-800">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white text-4xl font-bold group-hover:scale-110 transition-transform duration-300">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                      {/* <div className="flex gap-4">
                        <a href="#" className="w-8 h-8 bg-white/20 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors duration-300">
                          <span className="text-white text-sm">in</span>
                        </a>
                        <a href="#" className="w-8 h-8 bg-white/20 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors duration-300">
                          <span className="text-white text-sm">tw</span>
                        </a>
                        <a href="#" className="w-8 h-8 bg-white/20 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors duration-300">
                          <span className="text-white text-sm">ig</span>
                        </a>
                      </div> */}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-orange-500 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-orange-500 font-semibold mb-3 text-sm">
                      {member.role}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2
            className="text-4xl font-bold text-center mb-12"
            style={{
              opacity: isVisible ? 1 : 0,
              animation: isVisible
                ? "slideInDown 0.8s ease-out 0.5s forwards"
                : "none",
            }}
          >
            Why Choose Us
          </h2>

          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-12">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Expert team with years of experience in digital content creation",
                "Custom solutions tailored to your unique needs and vision",
                "Fast turnaround times without sacrificing quality",
                "Ongoing support and maintenance for all our projects",
                "Innovative approach using latest technologies and trends",
                "Transparent communication and collaborative process",
              ].map((reason, idx) => (
                <div
                  key={idx}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    animation: isVisible
                      ? `slideInLeft 0.8s ease-out ${0.6 + idx * 0.1}s forwards`
                      : "none",
                  }}
                  className="flex items-start gap-4"
                >
                  <div className="text-orange-500 text-2xl mt-1">✓</div>
                  <p className="text-gray-300">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            animation: isVisible
              ? "slideInUp 0.8s ease-out 0.8s forwards"
              : "none",
          }}
          className="text-center bg-gradient-to-r from-orange-600 to-orange-700 rounded-xl p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
            Let's create something amazing. Get in touch with us today to
            discuss your next project.
          </p>
          <button className="bg-white text-orange-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
}
