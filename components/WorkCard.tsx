import Link from 'next/link'

type Props = {id:number,title:string,thumbnail:string,type:string,client:string}

export default function WorkCard({id,title,thumbnail,type,client}:Props){
  return (
    <article className="card">
      <div className="relative h-44">
        <img src={thumbnail} alt={title} className="w-full h-full object-cover"/>
        <div className="absolute inset-0 flex items-center justify-center">
          <Link href={`/work/${id}`} className="btn">Watch Video</Link>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-400">{type}</p>
        <h3 className="font-semibold mt-2">{title}</h3>
        <p className="text-xs text-gray-500 mt-1">{client}</p>
      </div>
    </article>
  )
}
