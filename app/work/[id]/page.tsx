import works from '../../../data/works.json'

export default function WorkPage({ params }: { params: { id: string } }) {
  const id = Number(params.id)
  const work = (works as any).find((w: any) => w.id === id)
  if (!work) return <div className="container py-12">Work not found</div>
  return (
    <div className="container py-12">
      <h1 className="text-2xl font-bold">{work.title}</h1>
      <p className="text-sm text-gray-400">{work.type} — {work.client}</p>
      <div className="mt-6 card p-4">
        <img src={work.thumbnail} alt={work.title} className="w-full h-96 object-cover rounded" />
      </div>
    </div>
  )
}
