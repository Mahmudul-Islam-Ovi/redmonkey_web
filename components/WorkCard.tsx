import Link from "next/link";

type Props = {
  id: number;
  title: string;
  thumbnail: string;
  type: string;
  client: string;
  link: string;
};

export default function WorkCard({
  id,
  title,
  thumbnail,
  type,
  client,
  link,
}: Props) {
  return (
    <article className="card group overflow-hidden">
      <div className="relative h-44 overflow-hidden bg-gray-900">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Overlay that appears on hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Link
            href={link}
            target="_blank"
            className="btn bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded transition"
          >
            Watch Video
          </Link>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-400">{type}</p>
        <h3 className="font-semibold mt-2">{title}</h3>
        <p className="text-xs text-gray-500 mt-1">{client}</p>
      </div>
    </article>
  );
}
