import WorkCard from './WorkCard'
import works from '../data/works.json'

export default function WorkGrid(){
  return (
    <section id="work" className="container py-12">
      <h2 className="text-3xl text-center font-bold mb-8">Our Work</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {works.map((w:any) => <WorkCard key={w.id} {...w} />)}
      </div>
    </section>
  )
}
