"use client";
import React from "react";
import Image from "next/image";
import hero from "@/public/homepage/hero1.png";

export default function Hero() {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase font-extrabold leading-tight mb-6">
              Crane Rental Solutions Across India
            </h1>

            <p className="text-gray-500 max-w-xl mx-auto lg:mx-0 mb-8 text-sm sm:text-base">
              ASP Cranes is a trusted name in crane rental and heavy lifting
              services, delivering safe, efficient, and cost-effective solutions
              for infrastructure, industrial, and construction projects. With a
              modern fleet and experienced operators, we handle projects of all
              scales — from compact lifting to super-heavy operations.
            </p>

            {/* BUTTONS */}
             <div className="flex flex-col w-full sm:flex-row gap-4 max-lg:items-center">
                  <button className="flex items-center  bg-white max-lg:pl-12 pl-4 justify-between border border-gray-800 rounded-md font-semibold text-gray-900 hover:bg-red-600 hover:text-white transition group">
                    Read More
                    <span className="px-4 py-2 max-lg:ml-12 ml-4 text-2xl rounded-r-md bg-red-600 text-white group-hover:bg-white group-hover:text-gray-800 transition">
                      »
                    </span>
                  </button>

                  <button className="bg-white border text-black  hover:text-white hover:bg-red-600 transition max-lg:px-18 px-10 py-3 rounded-md font-semibold">
                    Contact Us
                  </button>
                </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:justify-end">
            <Image
              src={hero}
              alt="Construction Crane"
              priority
              className="w-full max-w-md sm:max-w-lg lg:max-w-full h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
