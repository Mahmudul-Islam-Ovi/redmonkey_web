import streaming from '../data/streaming.json'
import Link from 'next/link'

export default function Streaming(){
  return (
    <section id="streaming" className="container py-12">
      <h2 className="text-3xl text-center font-bold mb-8">Streaming</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {streaming.map((s:any) => (
          <div className="card p-4" key={s.id}>
            <div className="h-40 mb-3 rounded overflow-hidden">
              <img src={s.thumbnail} alt={s.title} className="w-full h-full object-cover" />
            </div>
            <h3 className="font-semibold">{s.title}</h3>
            <p className="text-sm text-gray-400">{s.duration}</p>
            <div className="mt-3">
              <Link href={`/stream/${s.id}`} className="btn">Watch</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
