import streaming from "../../../data/streaming.json";

export default function StreamPage({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const item = (streaming as any).find((s: any) => s.id === id);
  if (!item) return <div className="container py-12">Stream not found</div>;
  return (
    <div className="container py-12">
      <h1 className="text-2xl font-bold">{item.title}</h1>
      <p className="text-sm text-gray-400">Duration: {item.duration}</p>
      <div className="mt-6 card p-4">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-96 object-cover rounded"
        />
      </div>
    </div>
  );
}
