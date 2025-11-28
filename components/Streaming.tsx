// "use client";

// import { useEffect, useState } from "react";
// import streaming from "../data/streaming.json";

// function getYouTubeId(url: string) {
//   if (!url) return null;
//   // If user passed an id directly
//   const idRegex = /^[A-Za-z0-9_-]{11}$/;
//   if (idRegex.test(url)) return url;

//   // Try to extract from full url
//   const reg =
//     /(?:youtube(?:-nocookie)?\.com\/(?:[^\n\r]+v=|v\/|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/;
//   const match = url.match(reg);
//   return match ? match[1] : null;
// }

// export default function Streaming() {
//   const [playing, setPlaying] = useState<number | null>(null);

//   useEffect(() => {
//     function onKey(e: KeyboardEvent) {
//       if (e.key === "Escape") setPlaying(null);
//     }

//     if (playing !== null) {
//       // lock scroll
//       const prev = document.body.style.overflow;
//       document.body.style.overflow = "hidden";
//       window.addEventListener("keydown", onKey);
//       return () => {
//         document.body.style.overflow = prev || "";
//         window.removeEventListener("keydown", onKey);
//       };
//     }
//     return;
//   }, [playing]);

//   return (
//     <section id="streaming" className="container py-12">
//       <h2 className="text-3xl text-center font-bold mb-8">Streaming</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {streaming.map((s: any) => {
//           const videoId = getYouTubeId(s.link);
//           const thumb =
//             s.thumbnail ||
//             (videoId
//               ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
//               : "");
//           const embedUrl = videoId
//             ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`
//             : s.link;

//           return (
//             <div className="card p-4 group" key={s.id}>
//               <div className="relative h-40 mb-3 rounded overflow-hidden">
//                 <img
//                   src={thumb}
//                   alt={s.title}
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                 />
//                 {/* Overlay that appears on hover */}
//                 <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                   <button
//                     onClick={() => setPlaying(s.id)}
//                     className="btn bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded transition"
//                     aria-label={`Watch ${s.title}`}
//                   >
//                     Watch
//                   </button>
//                 </div>
//               </div>
//               <h3 className="font-semibold">{s.title}</h3>
//               <p className="text-sm text-gray-400">{s.duration}</p>
//             </div>
//           );
//         })}
//       </div>

//       {/* Modal */}
//       {playing !== null && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center px-4"
//           aria-modal="true"
//           role="dialog"
//           onKeyDown={(e) => {
//             if (e.key === "Escape") setPlaying(null);
//           }}
//         >
//           <div
//             className="absolute inset-0 bg-black/70 backdrop-blur-sm"
//             onClick={() => setPlaying(null)}
//           />

//           <div className="relative w-full max-w-3xl aspect-video bg-black rounded shadow-xl overflow-hidden">
//             <iframe
//               src={
//                 getYouTubeId(
//                   streaming.find((s: any) => s.id === playing)?.link || ""
//                 )
//                   ? `https://www.youtube.com/embed/${getYouTubeId(
//                       streaming.find((s: any) => s.id === playing)?.link || ""
//                     )}?autoplay=1&rel=0`
//                   : streaming.find((s: any) => s.id === playing)?.link || ""
//               }
//               title={streaming.find((s: any) => s.id === playing)?.title || ""}
//               className="w-full h-full"
//               frameBorder={0}
//               allow="autoplay; encrypted-media; picture-in-picture"
//               allowFullScreen
//             />

//             <button
//               onClick={() => setPlaying(null)}
//               className="absolute top-3 right-3 bg-black/50 text-white rounded-full p-2 z-10"
//               aria-label="Close video"
//             >
//               ✕
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import streaming from "../data/streaming.json";

function getYouTubeId(url: string) {
  if (!url) return null;
  // If user passed an id directly
  const idRegex = /^[A-Za-z0-9_-]{11}$/;
  if (idRegex.test(url)) return url;

  // Try to extract from full url
  const reg =
    /(?:youtube(?:-nocookie)?\.com\/(?:[^\n\r]+v=|v\/|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/;
  const match = url.match(reg);
  return match ? match[1] : null;
}

export default function Streaming() {
  const [playing, setPlaying] = useState<number | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setPlaying(null);
    }

    if (playing !== null) {
      // lock scroll
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = prev || "";
        window.removeEventListener("keydown", onKey);
      };
    }
    return;
  }, [playing]);

  return (
    <section id="streaming" className="container py-12">
      <h2 className="text-3xl text-center font-bold mb-8">Streaming</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {streaming.map((s: any) => {
          const videoId = getYouTubeId(s.link);
          const thumb =
            s.thumbnail ||
            (videoId
              ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
              : "");
          const embedUrl = videoId
            ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`
            : s.link;

          return (
            <div className="card p-4" key={s.id}>
              <div className="mb-3 rounded overflow-hidden">
                <img
                  src={thumb}
                  alt={s.title}
                  className="w-full h-full object-fill"
                />
              </div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-sm text-gray-400">{s.duration}</p>
              <div className="mt-3">
                <button
                  onClick={() => setPlaying(s.id)}
                  className="btn"
                  aria-label={`Watch ${s.title}`}
                >
                  Watch
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {playing !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          aria-modal="true"
          role="dialog"
          onKeyDown={(e) => {
            if (e.key === "Escape") setPlaying(null);
          }}
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setPlaying(null)}
          />

          <div className="relative w-full max-w-3xl aspect-video bg-black rounded shadow-xl overflow-hidden">
            <iframe
              src={
                getYouTubeId(
                  streaming.find((s: any) => s.id === playing)?.link || ""
                )
                  ? `https://www.youtube.com/embed/${getYouTubeId(
                      streaming.find((s: any) => s.id === playing)?.link || ""
                    )}?autoplay=1&rel=0`
                  : streaming.find((s: any) => s.id === playing)?.link || ""
              }
              title={streaming.find((s: any) => s.id === playing)?.title || ""}
              className="w-full h-full"
              frameBorder={0}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />

            <button
              onClick={() => setPlaying(null)}
              className="absolute top-3 right-3 bg-black/50 text-white rounded-full p-2 z-10"
              aria-label="Close video"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
