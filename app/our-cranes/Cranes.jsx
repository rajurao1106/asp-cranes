"use client";

import { useState } from "react";
import Image from "next/image";

const cranes = [
  {
    id: 1,
    name: "Tower Crane",
    description:
      "Tower cranes provide exceptional height and lifting capacity for high-rise and large-scale construction projects.",
    specs: {
      "Lifting Capacity": "350 MT",
      "Main Boom Length": "63 Mtr",
      "Jib Length": "30 Mtr",
      "Unladen Weight": "70.7",
      "Counter Weight": "100 MT",
      "Overall Length (Including Boom)": "19.68 Mtr",
      "Overall Width (Including Outrigger)": "8.5 Mtr",
    },
  },
  {
    id: 2,
    name: "Crawler Crane",
    description:
      "Designed for super-heavy lifting, crawler cranes deliver unmatched stability and performance.",
    specs: {
      "Lifting Capacity": "350 MT",
      "Main Boom Length": "63 Mtr",
      "Jib Length": "30 Mtr",
      "Unladen Weight": "70.7",
      "Counter Weight": "100 MT",
      "Overall Length (Including Boom)": "19.68 Mtr",
      "Overall Width (Including Outrigger)": "8.5 Mtr",
    },
  },
];

export default function Cranes() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">
          Our Cranes
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cranes.map((crane) => (
          <div
            key={crane.id}
            className="flex flex-col rounded-xl overflow-hidden shadow bg-white hover:shadow-lg transition"
          >
            {/* Image */}
            <div className="relative w-full h-44">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd"
                alt={crane.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-1">
              <h3 className="font-semibold text-lg mb-2">
                {crane.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600">
                {crane.description}
              </p>

              {/* Show More Button */}
              <button
                onClick={() => toggle(crane.id)}
                className="text-red-500 text-sm mt-2 text-left hover:underline"
              >
                {openId === crane.id ? "Close Details" : "See Details"}
              </button>

              {/* Specs (Toggle) */}
              {openId === crane.id && (
                <ul className="mt-3 text-sm text-gray-700 space-y-1">
                  {Object.entries(crane.specs).map(([key, value]) => (
                    <li key={key} className="flex justify-between">
                      <span className="font-medium">{key}</span>
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Buttons */}
              <div className="mt-4 flex gap-3">
                <button className="w-full border border-gray-300 text-sm py-2 rounded-md hover:bg-gray-100">
                  Download Spec
                </button>

                <button className="w-full bg-red-500 text-white text-sm py-2 rounded-md hover:bg-red-600">
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