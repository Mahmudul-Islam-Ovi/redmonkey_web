import services from "../data/services.json";

export default function Services() {
  return (
    <section id="services" className="container py-12">
      <h2 className="text-3xl text-center font-bold mb-8">Our Services</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {services.map((s: any) => (
          <div className="card p-4 text-center" key={s.id}>
            <div className="h-28 mb-3 rounded flex items-center justify-center overflow-hidden">
              <img
                src={s.image}
                alt={s.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="font-semibold">{s.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
