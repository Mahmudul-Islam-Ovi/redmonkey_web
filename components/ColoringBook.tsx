"use client";

import React, { useState } from "react";
import coloringBooks from "../data/coloringbook.json";

type ColoringBook = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  pages: number;
  format: string;
  volume: string;
  color: string;
  thumbnail: string;
};

const colorClasses = {
  purple:
    "border-purple-600 bg-gradient-to-b from-purple-900/30 to-transparent",
  red: "border-red-600 bg-gradient-to-b from-red-900/30 to-transparent",
  green: "border-green-600 bg-gradient-to-b from-green-900/30 to-transparent",
};

export default function ColoringBook() {
  const [selectedBook, setSelectedBook] = useState<ColoringBook | null>(null);

  return (
    <section id="coloring-book" className="container mx-auto px-4 py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Coloring Book</h2>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coloringBooks.map((book, index) => (
          <div
            key={book.id}
            className="group cursor-pointer animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => setSelectedBook(book)}
          >
            {/* Card Container */}
            <div
              className={`relative h-96 rounded-lg overflow-hidden border-2 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 ${
                colorClasses[book.color as keyof typeof colorClasses]
              }`}
            >
              {/* Book Image */}
              <div className="relative h-full">
                <img
                  src={book.thumbnail}
                  alt={book.title}
                  className="w-full h-full object-fill group-hover:scale-110 transition-transform duration-500"
                />

                {/* Volume Badge */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-3 py-1 text-xs font-bold text-white">
                  {book.volume}
                </div>

                {/* Pages Badge */}
                <div className="absolute top-16 right-4 bg-red-600 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xs text-center leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {book.pages}
                  <br />
                  PAGES
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {book.title}
                  </h3>
                  <p className="text-sm text-gray-200 mb-3">
                    {book.description}
                  </p>
                  <p className="text-xs text-gray-300 mb-3">{book.format}</p>
                  <button className="btn bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded transition w-full">
                    View Details
                  </button>
                </div>
              </div>
            </div>

            {/* Card Info */}
            <div className="mt-4">
              <h3 className="font-bold text-lg group-hover:text-orange-600 transition-colors">
                {book.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {book.pages} pages, {book.format}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedBook && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedBook(null)}
        >
          <div
            className="bg-gray-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-800 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 flex items-center justify-between p-6 border-b border-gray-800 bg-gray-900/95 backdrop-blur-sm">
              <h2 className="text-2xl font-bold">{selectedBook.title}</h2>
              <button
                onClick={() => setSelectedBook(null)}
                className="text-gray-400 hover:text-white transition text-2xl"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Thumbnail */}
              <div className="mb-6 rounded-lg overflow-hidden h-64">
                <img
                  src={selectedBook.thumbnail}
                  alt={selectedBook.title}
                  className="w-full h-full object-fill"
                />
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-800 rounded p-4">
                  <p className="text-gray-400 text-sm mb-1">Pages</p>
                  <p className="text-2xl font-bold text-orange-600">
                    {selectedBook.pages}
                  </p>
                </div>
                <div className="bg-gray-800 rounded p-4">
                  <p className="text-gray-400 text-sm mb-1">Volume</p>
                  <p className="text-2xl font-bold text-orange-600">
                    {selectedBook.volume}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3">About</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  {selectedBook.description}
                </p>
                <p className="text-gray-400 text-sm">
                  <span className="font-semibold">Formats:</span>{" "}
                  {selectedBook.format}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button className="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded transition">
                  Download
                </button>
                <button
                  onClick={() => setSelectedBook(null)}
                  className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 rounded transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-scale-in {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}
