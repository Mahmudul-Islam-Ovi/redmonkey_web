"use client";

import Link from "next/link";
import comicBooks from "../data/comicBooks.json";

export default function ComicBook() {
  return (
    <section id="comics-book" className="container mx-auto px-4 py-16">
      {/* Section Header */}
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-orange-600 mb-4">
          Comics Book
        </h2>
      </div>

      {/* Comic Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {comicBooks.map((comic, index) => (
          <Link href={`/comics-book/${comic.id}`} key={comic.id}>
            <div className="group cursor-pointer h-full border bg-gray-800 border-gray-800  rounded-xl p-4">
              {/* Card Container */}
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 bg-gray-900 border border-gray-800">
                {/* Comic Image */}
                <div className="relative h-full">
                  <img
                    src={comic.thumbnail}
                    alt={comic.title}
                    className="w-full h-full object-full group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="btn bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded transition w-full">
                      View Book
                    </button>
                  </div>
                </div>
              </div>

              {/* Card Info */}
              <div className="mt-4">
                <h3 className="font-bold text-lg group-hover:text-orange-600 transition-colors line-clamp-2">
                  {comic.title}
                </h3>
                <p className="text-gray-400 text-sm mt-1">{comic.specs}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
