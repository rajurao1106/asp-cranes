"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import hero1 from "@/public/homepage/hero1.jpg";
import hero2 from "@/public/homepage/hero12.jpg";
import hero3 from "@/public/homepage/hero13.jpg";
import hero4 from "@/public/homepage/hero14.jpg";
import hero5 from "@/public/homepage/hero15.jpg";
import hero6 from "@/public/homepage/hero16.jpg";

const slides = [
  {
    title: "Tower Cranes",
    subtitle: "We Provide Crane Rental Services",
    desc: "High-rise construction projects ke liye powerful and stable tower cranes, designed to deliver precision lifting, safety, and reliable performance for large-scale infrastructure developments.",
    image: hero1,
  },
  {
    title: "Truck-Mounted Cranes",
    subtitle: "We Provide Crane Rental Services",
    desc: "Truck-mounted cranes offering fast mobility and efficient heavy lifting, ideal for projects requiring quick setup, flexibility, and reliable performance across multiple sites.",
    image: hero2,
  },
  {
    title: "Crawler Cranes",
    subtitle: "We Provide Crane Rental Services",
    desc: "Robust crawler cranes engineered for rough terrain and heavy-duty applications, providing superior stability and high load capacity.",
    image: hero3,
  },
  {
    title: "Pick & Carry Cranes",
    subtitle: "We Provide Crane Rental Services",
    desc: "Compact and versatile cranes suitable for confined spaces, offering smooth maneuverability and precise handling.",
    image: hero4,
  },
  {
    title: "Aerial Work Platforms (AWP)",
    subtitle: "We Provide Crane Rental Services",
    desc: "Safe and efficient aerial platforms designed for height access, maintenance, and inspection tasks.",
    image: hero5,
  },
  {
    title: "Multi-Axle Platform Trailers",
    subtitle: "We Provide Crane Rental Services",
    desc: "High-capacity trailers built for heavy equipment transportation with safe load distribution.",
    image: hero6,
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () =>
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, 4000);
      return () => clearInterval(interval);
    }
  }, [index, isPaused]);

  return (
    <section
      className="relative w-full h-[90vh] lg:h-screen overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* SLIDES */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="relative min-w-full h-full text-white">
            {/* Background Image */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={i === 0}
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* CONTENT */}
            <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center">
              <div className="max-w-xl text-center lg:text-left">
                <p className="uppercase tracking-widest text-xs sm:text-sm mb-3 text-red-500 font-bold">
                  {slide.subtitle}
                </p>

                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4">
                  {slide.title}
                </h1>

                <p className="text-gray-200 text-sm sm:text-base lg:text-lg mb-6">
                  {slide.desc}
                </p>

                <div className="flex flex-col w-full sm:flex-row gap-4 max-lg:items-center">
                  <button className="flex items-center  bg-white max-lg:pl-12 pl-4 justify-between border border-gray-800 rounded-md font-semibold text-gray-900 hover:bg-red-600 hover:text-white transition group">
                    About Company
                    <span className="px-4 py-2 max-lg:ml-12 ml-4 text-2xl rounded-r-md bg-red-600 text-white group-hover:bg-white group-hover:text-gray-800 transition">
                      »
                    </span>
                  </button>

                  <button className="bg-white border text-black  hover:text-white hover:bg-red-600 transition max-lg:px-20 px-10 py-3 rounded-md font-semibold">
                    Get a Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* NAV BUTTONS */}
      <div className="absolute bottom-6 right-6 flex gap-3 z-20">
        <button
          onClick={prevSlide}
          className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600 text-white flex items-center justify-center text-xl hover:bg-white/40 transition"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600 text-white flex items-center justify-center text-xl hover:bg-white/40 transition"
        >
          ›
        </button>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1 rounded-full cursor-pointer transition-all ${
              index === i ? "w-8 bg-red-600" : "w-4 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
