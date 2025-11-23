"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import coloringBooks from "../../../data/coloringbook.json";

export default function ColoringBookDetailPage() {
  const params = useParams();
  const bookId = parseInt(params.id as string);
  const book = coloringBooks.find((b: any) => b.id === bookId);

  if (!book) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4 text-white">
            Coloring Book not found
          </h1>
          <Link
            href="/#coloring-book"
            className="text-orange-500 hover:text-orange-400 transition font-semibold"
          >
            Back to Coloring Books
          </Link>
        </div>
      </div>
    );
  }

  const colorBadgeClasses = {
    purple: "bg-purple-600",
    red: "bg-red-600",
    green: "bg-green-600",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Top Navigation Bar */}
      <div className="sticky top-0 z-50 bg-black/90 backdrop-blur-lg border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/coloring-book"
              className="flex items-center gap-2 text-gray-300 hover:text-orange-500 transition group"
            >
              <svg
                className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="font-semibold">Back to Coloring Books</span>
            </Link>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 text-gray-400">
                <span className="text-sm">{book.title}</span>
                <span className="text-gray-600">•</span>
                <span
                  className={`text-xs px-2 py-1 rounded-full text-white font-semibold ${
                    colorBadgeClasses[
                      book.color as keyof typeof colorBadgeClasses
                    ]
                  }`}
                >
                  {book.volume}
                </span>
              </div>

              <a
                href={book.pdf}
                download
                className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition font-semibold text-sm flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Book Info Header */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              {book.title}
            </h1>
            <span
              className={`text-xs px-3 py-1 rounded-full text-white font-bold ${
                colorBadgeClasses[book.color as keyof typeof colorBadgeClasses]
              }`}
            >
              {book.volume}
            </span>
          </div>
          <p className="text-gray-400 text-lg mb-2">{book.description}</p>
          <div className="flex items-center justify-center gap-4 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>{book.pages} Pages</span>
            </div>
            <span className="text-gray-700">•</span>
            <span>{book.format}</span>
          </div>
        </div>

        {/* Book Details Cards */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pages Card */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center">
              <svg
                className="w-8 h-8 mx-auto mb-3 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <p className="text-3xl font-bold text-white mb-1">{book.pages}</p>
              <p className="text-gray-400 text-sm">Total Pages</p>
            </div>

            {/* Volume Card */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center">
              <svg
                className="w-8 h-8 mx-auto mb-3 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <p className="text-3xl font-bold text-white mb-1">
                {book.volume}
              </p>
              <p className="text-gray-400 text-sm">Volume</p>
            </div>

            {/* Formats Card */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center">
              <svg
                className="w-8 h-8 mx-auto mb-3 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <p className="text-lg font-bold text-white mb-1">Multiple</p>
              <p className="text-gray-400 text-sm">File Formats</p>
            </div>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-800/30 rounded-2xl p-4 shadow-2xl border border-gray-800/50">
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <iframe
                src={book.pdf}
                className="w-full h-[600px] md:h-[800px] lg:h-[900px]"
                title={book.title}
              />
            </div>
          </div>
        </div>

        {/* Format Details */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <svg
                className="w-5 h-5 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Available Formats
            </h3>
            <p className="text-gray-300">{book.format}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="max-w-4xl mx-auto mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href={book.pdf}
            download
            className="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-xl transition text-center flex items-center justify-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Full PDF
          </a>
          <a
            href={book.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 rounded-xl transition text-center flex items-center justify-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Open in New Tab
          </a>
        </div>
      </div>
    </div>
  );
}
