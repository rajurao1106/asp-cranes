"use client";
import Button1 from "@/ui/buttons/Button1";
import Image from "next/image";
import React from "react";
import lift from "@/public/homepage/lift.png";

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
    <section className="w-full py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
       
        <div className="flex justify-between items-center">
           <div className="w-[58%] mb-16">
          <p className="text-lg flex font-bold text-red-500 gap-2 border-b tracking-widest mb-4 relative">
            <Image src={lift} alt="" width={30} height={30} priority />
            <span>OUR SERVICES</span>
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Reliable Solutions for Heavy & Industrial Operations
          </h2>
        </div>
          <Button1 button1={"See More"} />
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
                {/* <Button1 button1="Explore More" /> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
