"use client";
import Image from "next/image";
import React from "react";

const services = [
  {
    title: "Heavy Equipment Shifting & Loading",
    desc: "Safe and efficient shifting, loading, and unloading of heavy machinery using advanced lifting techniques.",
    image:
      "https://images.unsplash.com/photo-1590650046871-92c887180603?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Crane Rental with Certified Operators",
    desc: "Wide range of cranes operated by trained and certified professionals ensuring maximum safety.",
    image:
      "https://images.unsplash.com/photo-1590650046871-92c887180603?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Aerial Access Solutions",
    desc: "Reliable aerial platforms and access solutions for high-reach industrial and construction work.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Machine Jacking & Leveling",
    desc: "Precision jacking and leveling services for industrial machines and heavy installations.",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Project-based Operations & Maintenance (O&M)",
    desc: "End-to-end operational and maintenance support for long-term and project-based requirements.",
    image:
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Services() {
  return (
    <section className="w-full bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-red-600 font-semibold uppercase tracking-wider">
            Our Services
          </p>
          <h2 className="text-3xl text-gray-900 mt-2">
            Reliable Solutions for Heavy & Industrial Operations
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 flex-grow">{service.desc}</p>

                {/* Explore More Button */}
                <button className="flex items-center  justify-between  pl-4  border border-gray-800 rounded-sm font-semibold text-gray-900 w-fit hover:bg-red-600 hover:text-white transition group">
                  Explore More
                  <span className="pb-2 px-4 h-full text-4xl flex ml-4 items-center justify-center bg-red-600 text-white group-hover:bg-white group-hover:text-gray-800 transition">
                    »
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
