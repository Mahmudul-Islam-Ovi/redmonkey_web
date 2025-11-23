// "use client";

// import { useState, useRef } from "react";
// import { useParams } from "next/navigation";
// import Link from "next/link";
// import comicBooks from "../../../data/comicBooks.json";

// export default function ComicBookDetailPage() {
//   const params = useParams();
//   const comicId = parseInt(params.id as string);
//   const comic = comicBooks.find((c: any) => c.id === comicId);
//   const [currentPage, setCurrentPage] = useState<number>(0);
//   const touchStartX = useRef<number | null>(null);

//   if (!comic) {
//     return (
//       <div className="container mx-auto px-4 py-16 text-center">
//         <h1 className="text-2xl font-bold mb-4">Comic Book not found</h1>
//         <Link
//           href="/comics"
//           className="text-orange-600 hover:text-orange-500 transition"
//         >
//           Back to Comics
//         </Link>
//       </div>
//     );
//   }

//   const pages: string[] = comic.pages || [];
//   const totalPages = pages.length;

//   const handlePrevPage = () => {
//     setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
//   };

//   const handleNextPage = () => {
//     setCurrentPage((prev) => (prev + 1) % totalPages);
//   };

//   return (
//     <div className="min-h-screen bg-black">
//       <div className="container mx-auto px-4 py-12">
//         {/* Breadcrumb */}
//         <div className="mb-8 flex items-center gap-2 text-gray-400 text-sm">
//           <Link href="/" className="hover:text-orange-600 transition">
//             Home
//           </Link>
//           <span>/</span>
//           <Link href="/comics" className="hover:text-orange-600 transition">
//             Comics Book
//           </Link>
//           <span>/</span>
//           <span className="text-white">{comic.title}</span>
//         </div>

//         {/* Comic Book Header */}
//         <div className="mb-12">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">{comic.title}</h1>
//           <p className="text-gray-400 mb-4">{comic.description}</p>
//           <p className="text-gray-500 text-sm">
//             {comic.specs} • Page {currentPage + 1} of {totalPages}
//           </p>
//         </div>

//         {/* Back Button */}
//         <div className="mt-8">
//           <Link
//             href="/comics"
//             className="text-orange-600 hover:text-orange-500 transition font-semibold"
//           >
//             ← Back to Comics
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

import comicBooks from "../../../data/comicBooks.json";

export default function ComicBookDetailPage() {
  const params = useParams();
  const comicId = parseInt(params.id as string);
  const comic = comicBooks.find((c: any) => c.id === comicId);

  if (!comic) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4 text-white">
          Comic Book not found
        </h1>
        <Link
          href="/comics"
          className="text-orange-600 hover:text-orange-500 transition"
        >
          Back to Comics
        </Link>
      </div>
    );
  }

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
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {comic.title}
          </h1>
          <p className="text-gray-400 mb-4">{comic.description}</p>
          <p className="text-gray-500 text-sm">{comic.specs}</p>
        </div>

        {/* PDF Viewer */}
        <div className="mb-8 bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
          <iframe
            src={comic.pdf}
            className="w-full h-[600px] md:h-[800px]"
            title={comic.title}
          />
        </div>

        {/* Download Button */}
        <div className="flex justify-center mb-8">
          <a
            href={comic.pdf}
            download
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-lg transition inline-flex items-center gap-2"
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
            Download PDF
          </a>
        </div>

        {/* Back Button */}
        <div className="mt-8">
          <Link
            href="/comics"
            className="text-orange-600 hover:text-orange-500 transition font-semibold inline-flex items-center gap-2"
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Comics
          </Link>
        </div>
      </div>
    </div>
  );
}
