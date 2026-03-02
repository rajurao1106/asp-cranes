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
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold ">Our Cranes</h2>
      <p className="text-base text-gray-700 mb-8">Engineered for heavy transport, multi-axle platforms ensure safe movement of oversized loads.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cranes.map((crane) => (
          <div
            key={crane.id}
            className=" flex justify-between items-center flex-col rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
          >
            {/* Image Section */}
            <div className="relative h-48 w-full">
              <Image
                src="/crane-placeholder.jpg" // put image in /public folder
                alt="Crane Image"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content */}
            <div className="p-4 ">
              <h3 className="font-semibold text-lg">{crane.name}</h3>
              <p className="text-sm text-gray-600">
                {crane.description}
              </p>

              {/* Buttons */}
              <div className="mt-4 flex gap-3">
                <button className="flex-1 border border-gray-300 text-sm py-2 rounded hover:bg-gray-200 transition duration-300">
                  Download Spec
                </button>
                <button className="flex-1 bg-red-500 text-white text-sm py-2 rounded hover:bg-red-600 transition duration-300">
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
