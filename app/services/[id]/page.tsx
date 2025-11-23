// "use client";

// import { useParams } from "next/navigation";
// import Link from "next/link";
// import services from "../../../data/services.json";

// export default function ServiceDetailPage() {
//   const params = useParams();
//   const serviceId = parseInt(params.id as string);
//   const service = services.find((s: any) => s.id === serviceId);

//   if (!service) {
//     return (
//       <div className="container mx-auto px-4 py-16 text-center">
//         <h1 className="text-2xl font-bold mb-4">Service not found</h1>
//         <Link
//           href="/services"
//           className="text-orange-600 hover:text-orange-500 transition"
//         >
//           Back to Services
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen">
//       <div className="container mx-auto px-4 py-16">
//         {/* Breadcrumb */}
//         <div className="mb-8 flex items-center gap-2 text-gray-400 text-sm">
//           <Link href="/" className="hover:text-orange-600 transition">
//             Home
//           </Link>
//           <span>/</span>
//           <Link href="/services" className="hover:text-orange-600 transition">
//             Services
//           </Link>
//           <span>/</span>
//           <span className="text-white">{service.title}</span>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           {/* Image Section */}
//           <div className="order-2 md:order-1">
//             <div className="h-96 md:h-full rounded-lg overflow-hidden">
//               <img
//                 src={service.image}
//                 alt={service.title}
//                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
//               />
//             </div>
//           </div>

//           {/* Content Section */}
//           <div className="order-1 md:order-2">
//             <h1 className="text-4xl md:text-5xl font-bold mb-4">
//               {service.title}
//             </h1>

//             <p className="text-gray-300 text-lg leading-relaxed mb-8">
//               {service.description}
//             </p>

//             <div className="space-y-6 mb-8">
//               <div>
//                 <h3 className="text-xl font-semibold mb-3 text-orange-600">
//                   Key Features
//                 </h3>
//                 <ul className="space-y-2 text-gray-400">
//                   <li className="flex items-start gap-3">
//                     <span className="text-orange-600 mt-1">✓</span>
//                     <span>Professional quality and attention to detail</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <span className="text-orange-600 mt-1">✓</span>
//                     <span>Tailored solutions for your unique needs</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <span className="text-orange-600 mt-1">✓</span>
//                     <span>Fast turnaround and reliable delivery</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <span className="text-orange-600 mt-1">✓</span>
//                     <span>Collaborative approach with continuous feedback</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4">
//               <Link
//                 href="/#contact"
//                 className="btn btn-primary bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded transition text-center"
//               >
//                 Get Started
//               </Link>
//               <Link
//                 href="/#services"
//                 className="btn bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded transition text-center"
//               >
//                 View All Services
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Related Services */}
//         <div className="mt-20 pt-16 border-t border-gray-800">
//           <h2 className="text-3xl font-bold mb-8">Other Services</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {services
//               .filter((s: any) => s.id !== serviceId)
//               .slice(0, 3)
//               .map((s: any) => (
//                 <Link href={`/services/${s.id}`} key={s.id}>
//                   <div className="group card h-full p-0 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-orange-600/20">
//                     <div className="h-48 overflow-hidden bg-gray-900">
//                       <img
//                         src={s.image}
//                         alt={s.name}
//                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                       />
//                     </div>
//                     <div className="p-4">
//                       <h3 className="font-bold group-hover:text-orange-600 transition-colors">
//                         {s.title}
//                       </h3>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
// Assuming the services data is imported correctly from the relative path
import services from "../../../data/services.json";

// Define the structure for a service item to improve type safety
interface ServiceItem {
  id: number;
  name: string;
  title: string;
  description: string;
  features: string[]; // Key change: features is an array of strings
  image: string;
}

export default function ServiceDetailPage() {
  const params = useParams();
  const serviceId = parseInt(params.id as string);
  // Type assertion for service data finding
  const service = services.find((s: any) => s.id === serviceId) as
    | ServiceItem
    | undefined;

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-16 text-center text-white min-h-screen bg-black">
        <h1 className="text-2xl font-bold mb-4">Service not found</h1>
        <Link
          href="/services"
          className="text-orange-600 hover:text-orange-500 transition"
        >
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    // Assuming the parent component provides the dark background (e.g., bg-black)
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-gray-400 text-sm">
          <Link href="/" className="hover:text-orange-600 transition">
            Home
          </Link>
          <span>/</span>
          <Link href="/services" className="hover:text-orange-600 transition">
            Services
          </Link>
          <span>/</span>
          <span className="text-white">{service.title}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="order-2 md:order-1">
            <div className="h-96 md:h-full rounded-lg overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 md:order-2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              {service.title}
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {service.description}
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-orange-600">
                  Key Features
                </h3>
                {/* 💥 DYNAMIC FEATURES LIST START 💥 */}
                <ul className="space-y-2 text-gray-400">
                  {/* Iterate over the features array from the service object */}
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-orange-600 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {/* 💥 DYNAMIC FEATURES LIST END 💥 */}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="btn btn-primary bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded transition text-center"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="btn bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded transition text-center"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>

        {/* Related Services */}
        <div className="mt-20 pt-16 border-t border-gray-800">
          <h2 className="text-3xl font-bold mb-8 text-white">Other Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services
              .filter((s: any) => s.id !== serviceId)
              .slice(0, 3)
              .map((s: any) => (
                <Link href={`/services/${s.id}`} key={s.id}>
                  <div className="group card h-full p-0 overflow-hidden cursor-pointer transition-all duration-300 bg-gray-900 hover:shadow-lg hover:shadow-orange-600/20">
                    <div className="h-48 overflow-hidden bg-gray-800">
                      <img
                        src={s.image}
                        alt={s.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-white group-hover:text-orange-600 transition-colors">
                        {s.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
