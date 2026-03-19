"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import crane2 from "@/public/homepage/hero1.png";
import crane6 from "@/public/homepage/crane6.jpg";
import hero21 from "@/public/homepage/hero2/hero21.jpeg";

const cranes = [
  { name: "Tower Cranes", image: crane2 },
  { name: "Truck-Mounted Cranes", image: crane2 },
  { name: "Crawler Cranes", image: crane2 },
  { name: "Pick & Carry Cranes", image: crane2 },
  { name: "Aerial Work Platforms", image: crane2 },
  { name: "Multi-Axle Platform Trailers", image: crane6 },
];

export default function HeroCrane() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % cranes.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={hero21}
          alt="Construction Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          
          {/* LEFT CONTENT */}
          <div className="text-white text-center lg:text-left">
            <span className="text-xs sm:text-sm uppercase tracking-widest text-orange-400 font-semibold">
              Featured Equipment
            </span>

            <h1 className="mt-4 text-3xl sm:text-2xl md:text-5xl font-bold leading-tight">
              Reliable Heavy Lifting & Crane Rental Solutions Across India
            </h1>

            <h2 className="mt-4 pb-8 text-2xl sm:text-3xl md:text-4xl font-bold text-white transition-all duration-500">
              {cranes[active].name}
            </h2>

             <div className="flex flex-col w-full sm:flex-row gap-4 max-lg:items-center">
                  <button className="flex items-center  bg-white max-lg:pl-12 pl-4 justify-between border border-gray-800 rounded-md font-semibold text-gray-900 hover:bg-red-600 hover:text-white transition group">
                    Our Services
                    <span className="px-4 py-2 max-lg:ml-12 ml-4 text-2xl rounded-r-md bg-red-600 text-white group-hover:bg-white group-hover:text-gray-800 transition">
                      »
                    </span>
                  </button>

                  <button className="bg-white border text-black  hover:text-white hover:bg-red-600 transition max-lg:px-20 px-10 py-3 rounded-md font-semibold">
                    Contact Us
                  </button>
                </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[260px] sm:h-[360px] md:h-[420px] lg:h-[550px]">
            {cranes.map((crane, index) => (
              <Image
                key={index}
                src={crane.image}
                alt={crane.name}
                fill
                className={`object-contain lg:object-cover rounded-2xl shadow-2xl transition-opacity duration-700 ${
                  index === active ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {cranes.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`h-2 rounded-full transition-all ${
              index === active
                ? "w-8 bg-red-600"
                : "w-3 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
