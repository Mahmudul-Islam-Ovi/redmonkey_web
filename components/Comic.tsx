"use client";

import { useState, useRef } from "react";
import comics from "../data/single-comics.json";

export default function Comic() {
  const [selected, setSelected] = useState<number>(0); // which comic index
  const [currentIndex, setCurrentIndex] = useState<number>(0); // which image is shown in gallery
  const [openIndex, setOpenIndex] = useState<number | null>(null); // modal page index
  const touchStartX = useRef<number | null>(null);

  const comic = comics[selected];
  const images: string[] = comic?.images || [];
  const total = images.length;

  const closeModal = () => {
    if (openIndex !== null) setCurrentIndex(openIndex);
    setOpenIndex(null);
  };

  if (!comic) return null;

  return (
    <section id="single-comics" className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-orange-600 mb-6">{comic.title}</h2>

      {/* Gallery: center image with blurred left/right previews */}
      <div className="w-full overflow-hidden rounded-lg bg-gray-800 p-6">
        <div className="relative flex items-center justify-center">
          {/* left preview */}
          {total > 1 && (
            <div className="hidden sm:flex items-center justify-center w-1/4 pr-4">
              <button
                className="opacity-60 hover:opacity-100 transform hover:scale-105 transition"
                onClick={() => setCurrentIndex((i) => (i - 1 + total) % total)}
                aria-label="previous"
              >
                <img
                  src={images[(currentIndex - 1 + total) % total]}
                  alt="prev"
                  className="w-full h-52 object-cover rounded-lg filter blur-sm"
                />
              </button>
            </div>
          )}

          {/* main image */}
          <div
            className="w-full sm:w-2/4 flex items-center justify-center relative"
            onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchStartX.current === null) return;
              const dx = e.changedTouches[0].clientX - touchStartX.current;
              const threshold = 50;
              if (dx > threshold)
                setCurrentIndex((i) => (i - 1 + total) % total);
              else if (dx < -threshold) setCurrentIndex((i) => (i + 1) % total);
              touchStartX.current = null;
            }}
          >
            <button
              onClick={() => setOpenIndex(currentIndex)}
              className="w-full max-w-[480px]"
              aria-label="open comic viewer"
            >
              <img
                src={images[currentIndex]}
                alt={comic.title}
                className="w-full h-auto object-contain rounded-md shadow-xl"
              />
            </button>

            {total > 1 && (
              <>
                <button
                  onClick={() =>
                    setCurrentIndex((i) => (i - 1 + total) % total)
                  }
                  className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full w-10 h-10 items-center justify-center hover:bg-black/60"
                  aria-label="previous"
                >
                  ‹
                </button>
                <button
                  onClick={() => setCurrentIndex((i) => (i + 1) % total)}
                  className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full w-10 h-10 items-center justify-center hover:bg-black/60"
                  aria-label="next"
                >
                  ›
                </button>
              </>
            )}
          </div>

          {/* right preview */}
          {total > 1 && (
            <div className="hidden sm:flex items-center justify-center w-1/4 pl-4">
              <button
                className="opacity-60 hover:opacity-100 transform hover:scale-105 transition"
                onClick={() => setCurrentIndex((i) => (i + 1) % total)}
                aria-label="next"
              >
                <img
                  src={images[(currentIndex + 1) % total]}
                  alt="next"
                  className="w-full h-52 object-cover rounded-lg filter blur-sm"
                />
              </button>
            </div>
          )}
        </div>

        {/* Thumbnails for multiple images on mobile */}
        {total > 1 && (
          <div className="mt-4 flex gap-3 overflow-x-auto py-2">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`flex-shrink-0 w-28 h-36 rounded overflow-hidden border-2 ${
                  currentIndex === idx
                    ? "border-orange-600"
                    : "border-transparent"
                } transition`}
              >
                <img
                  src={img}
                  alt={`page ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Modal viewer with left/right navigation */}
      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onKeyDown={(e) => {
            if (e.key === "Escape") setOpenIndex(null);
          }}
        >
          <div className="absolute inset-0 bg-black/70" onClick={closeModal} />

          <div className="relative max-w-4xl w-full rounded-lg overflow-hidden">
            <button
              aria-label="close"
              onClick={closeModal}
              className="absolute top-3 right-3 z-20 bg-black/50 text-white rounded-full p-2"
            >
              ✕
            </button>

            <div className="flex items-center">
              <button
                className="hidden md:flex items-center justify-center w-12 h-12 text-white bg-black/30 hover:bg-black/50"
                onClick={() => setOpenIndex((i) => (i! - 1 + total) % total)}
                aria-label="previous"
              >
                ‹
              </button>

              <div className="flex-1 bg-gray-900 p-4 flex items-center justify-center">
                <img
                  src={images[openIndex]}
                  alt={`page ${openIndex + 1}`}
                  className="max-h-[80vh] w-auto object-contain"
                />
              </div>

              <button
                className="hidden md:flex items-center justify-center w-12 h-12 text-white bg-black/30 hover:bg-black/50"
                onClick={() => setOpenIndex((i) => (i! + 1) % total)}
                aria-label="next"
              >
                ›
              </button>
            </div>

            {/* small mobile nav */}
            <div className="flex gap-2 overflow-x-auto p-3 bg-gray-800">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setOpenIndex(idx)}
                  className={`flex-shrink-0 w-20 h-28 rounded overflow-hidden ${
                    openIndex === idx ? "ring-2 ring-orange-600" : ""
                  }`}
                >
                  <img
                    src={img}
                    alt={`thumb ${idx + 1}`}
                    className="w-full h-full object-fill"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
