"use client";

import { useEffect, useState } from "react";

type Props = {
  id: number;
  title: string;
  thumbnail?: string;
  type: string;
  client: string;
  link: string;
};

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

export default function WorkCard({
  id,
  title,
  thumbnail,
  type,
  client,
  link,
}: Props) {
  const [playing, setPlaying] = useState(false);
  const videoId = getYouTubeId(link);
  const thumb =
    thumbnail ||
    (videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : "");
  const embedUrl = videoId
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`
    : link;

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setPlaying(false);
    }

    if (playing) {
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
    <article className="card group overflow-hidden">
      <div className="relative  overflow-hidden bg-gray-900">
        {!playing ? (
          <>
            <img
              src={thumb}
              alt={title}
              className="w-full h-full object-fill group-hover:scale-105 transition-transform duration-300"
            />
            {/* Overlay that appears on hover */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <button
                onClick={() => setPlaying(true)}
                className="btn bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded transition"
                aria-label={`Watch ${title}`}
              >
                Watch Video
              </button>
            </div>
          </>
        ) : null}
      </div>
      {/* Modal */}
      {playing && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          aria-modal="true"
          role="dialog"
          onKeyDown={(e) => {
            if (e.key === "Escape") setPlaying(false);
          }}
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setPlaying(false)}
          />

          <div className="relative w-full max-w-3xl aspect-video bg-black rounded shadow-xl overflow-hidden">
            <iframe
              src={embedUrl}
              title={title}
              className="w-full h-full"
              frameBorder={0}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />

            <button
              onClick={() => setPlaying(false)}
              className="absolute top-3 right-3 bg-black/50 text-white rounded-full p-2 z-10"
              aria-label="Close video"
            >
              ✕
            </button>
          </div>
        </div>
      )}
      <div className="p-4">
        <p className="text-sm text-gray-400">{type}</p>
        <h3 className="font-semibold mt-2">{title}</h3>
        <p className="text-xs text-gray-500 mt-1">{client}</p>
      </div>
    </article>
  );
}
