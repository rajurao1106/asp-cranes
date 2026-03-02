import Image from "next/image";

const cranes = [
  {
    id: 1,
    name: "Tower Crane",
    description:
      "Tower cranes provide exceptional height and lifting capacity for high-rise and large-scale construction projects. Available in multiple configurations to suit site requirements.",
  },
  {
    id: 2,
    name: "Aerial Work Platforms",
    description:
      "AWPs ensure safe access to elevated work areas, reducing risk and increasing productivity in construction and maintenance activities.",
  },
  {
    id: 3,
    name: "Crawler Crane",
    description:
      "Designed for super-heavy lifting, crawler cranes deliver unmatched stability and performance on complex job sites.",
  },
  {
    id: 4,
    name: "Truck Crane",
    description:
      "Truck-mounted cranes offer flexibility and speed, making them ideal for urban and multi-location projects.",
  },
  {
    id: 5,
    name: "Pick & Carry Crane",
    description:
      "Perfect for plant yards and tight spaces, these cranes provide efficient lifting with easy maneuverability.",
  },
  {
    id: 6,
    name: "Multi Axle Platform",
    description:
      "Engineered for heavy transport, multi-axle platforms ensure safe movement of oversized loads.",
  },
];

export default function Cranes() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">
          Our Cranes
        </h2>
        <p className="text-sm sm:text-base text-gray-600 max-w-2xl">
          Engineered for heavy transport, multi-axle platforms ensure safe movement of oversized loads.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cranes.map((crane) => (
          <div
            key={crane.id}
            className="flex flex-col rounded-xl overflow-hidden shadow bg-white
                       hover:shadow-lg transition duration-300"
          >
            {/* Image */}
            <div className="relative w-full h-44 sm:h-48 lg:h-52">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800"
                alt={crane.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw,
                       (max-width: 1024px) 50vw,
                       33vw"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-4">
              <h3 className="font-semibold text-base sm:text-lg mb-2">
                {crane.name}
              </h3>

              <p className="text-sm text-gray-600 flex-1">
                {crane.description}
              </p>

              {/* Buttons */}
              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <button className="w-full border border-gray-300 text-sm py-2 rounded-md
                                   hover:bg-gray-100 transition">
                  Download Spec
                </button>

                <button className="w-full bg-red-500 text-white text-sm py-2 rounded-md
                                   hover:bg-red-600 transition">
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}