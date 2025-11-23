import Link from "next/link";
import services from "../data/services.json";

export default function Services() {
  return (
    <section id="services" className="container mx-auto px-4 py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
          Comprehensive creative solutions tailored to bring your vision to life
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s: any) => (
          <Link href={`/services/${s.id}`} key={s.id}>
            <div className="group card h-full p-0 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-orange-600/20">
              {/* Image Container */}
              <div className="h-48 overflow-hidden bg-gray-900 relative">
                <img
                  src={s.image}
                  alt={s.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content Container */}
              <div className="p-6 h-full flex flex-col justify-between">
                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold mb-3 group-hover:text-orange-600 transition-colors duration-300">
                  {s.name}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
