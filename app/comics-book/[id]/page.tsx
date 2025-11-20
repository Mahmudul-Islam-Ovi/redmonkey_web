"use client";

import { useState, useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import comicBooks from "../../../data/comicBooks.json";

export default function ComicBookDetailPage() {
  const params = useParams();
  const comicId = parseInt(params.id as string);
  const comic = comicBooks.find((c: any) => c.id === comicId);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const touchStartX = useRef<number | null>(null);

  if (!comic) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Comic Book not found</h1>
        <Link
          href="/comics"
          className="text-orange-600 hover:text-orange-500 transition"
        >
          Back to Comics
        </Link>
      </div>
    );
  }

  const pages: string[] = comic.pages || [];
  const totalPages = pages.length;

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-gray-400 text-sm">
          <Link href="/" className="hover:text-orange-600 transition">
            Home
          </Link>
          <span>/</span>
          <Link href="/comics" className="hover:text-orange-600 transition">
            Comics Book
          </Link>
          <span>/</span>
          <span className="text-white">{comic.title}</span>
        </div>

        {/* Comic Book Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{comic.title}</h1>
          <p className="text-gray-400 mb-4">{comic.description}</p>
          <p className="text-gray-500 text-sm">
            {comic.specs} • Page {currentPage + 1} of {totalPages}
          </p>
        </div>

        {/* Comic Book Viewer */}
        <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
          {/* Main Image Container */}
          <div
            className="relative bg-black flex items-center justify-center max-h-[75vh] overflow-hidden"
            onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchStartX.current === null) return;
              const dx = e.changedTouches[0].clientX - touchStartX.current;
              const threshold = 50;
              if (dx > threshold) handlePrevPage();
              else if (dx < -threshold) handleNextPage();
              touchStartX.current = null;
            }}
          >
            <img
              src={pages[currentPage]}
              alt={`Page ${currentPage + 1}`}
              className="max-w-full max-h-[75vh] object-contain"
            />

            {/* Left Navigation Button */}
            {totalPages > 1 && (
              <button
                onClick={handlePrevPage}
                className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-orange-600/50 hover:bg-orange-600 text-white rounded-full w-12 h-12 items-center justify-center z-10 transition"
                aria-label="previous page"
              >
                ‹
              </button>
            )}

            {/* Right Navigation Button */}
            {totalPages > 1 && (
              <button
                onClick={handleNextPage}
                className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-orange-600/50 hover:bg-orange-600 text-white rounded-full w-12 h-12 items-center justify-center z-10 transition"
                aria-label="next page"
              >
                ›
              </button>
            )}
          </div>

          {/* Page Navigation Controls */}
          {totalPages > 1 && (
            <div className="bg-gray-800 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Left Button */}
              {/* <button
                onClick={handlePrevPage}
                className="flex md:hidden w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded transition"
              >
                ← Previous Page
              </button> */}

              {/* Page Info */}
              <div className="text-center flex-1">
                <p className="text-white font-semibold mb-2">
                  Page {currentPage + 1} of {totalPages}
                </p>
                {/* Page Thumbnails */}
                <div className="flex gap-2 overflow-x-auto justify-center pb-2">
                  {pages.map((page, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentPage(idx)}
                      className={`flex-shrink-0 w-12 h-16 rounded overflow-hidden border-2 transition ${
                        currentPage === idx
                          ? "border-orange-600"
                          : "border-gray-700 hover:border-gray-600"
                      }`}
                    >
                      <img
                        src={page}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Button */}
              {/* <button
                onClick={handleNextPage}
                className="flex md:hidden w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded transition"
              >
                Next Page →
              </button> */}
            </div>
          )}
        </div>

        {/* Back Button */}
        <div className="mt-8">
          <Link
            href="/comics"
            className="text-orange-600 hover:text-orange-500 transition font-semibold"
          >
            ← Back to Comics
          </Link>
        </div>
      </div>
    </div>
  );
}
